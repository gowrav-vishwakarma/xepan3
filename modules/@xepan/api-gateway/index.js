const fs = require('fs')
const path = require('path')
const YAML = require('json-to-pretty-yaml')
const _ = require('lodash')

/* eslint require-await:0 */
export async function beforeModule(context) {
  // add all routes for api/service in express-gateway configuration
  const baseEGConfigJSFilePath = path.resolve(
    path.join(__dirname, 'server', 'config', 'gateway.config.js')
  )
  const baseEGConfigYMLFilePath = path.resolve(
    path.join(__dirname, 'server', 'config', 'gateway.config.yml')
  )

  let baseEGconfig = require(baseEGConfigJSFilePath)
  const useApiGateway = process.env.USE_API_GATEWAY !== 'false'
  context.allModules.forEach((m) => {
    const apiConfigfilePath = path.join(
      m.path,
      'server',
      'api-gateway-config.js'
    )
    if (!fs.existsSync(apiConfigfilePath)) return
    const apiConfigfile = require(apiConfigfilePath)
    if (useApiGateway) {
      baseEGconfig = _.merge(baseEGconfig, apiConfigfile)
    } else {
      for (const key in apiConfigfile.apiEndpoints) {
        if (Object.hasOwnProperty.call(apiConfigfile.apiEndpoints, key)) {
          const apiName = apiConfigfile.apiEndpoints[key]
          if (typeof apiName.paths === 'string') apiName.paths = [apiName.paths]
          apiName.paths.forEach((p) => {
            const handler = path.join(m.path, 'server', 'app.js')
            this.options.serverMiddleware.push({ path: p, handler })
          })
        }
      }
    }
  })
  if (useApiGateway) {
    const data = YAML.stringify(baseEGconfig)
    fs.writeFileSync(baseEGConfigYMLFilePath, data)
  }
}
export default async function (context) {
  // module logic
}
export async function afterModule() {
  // run after loading module
  console.log('I AM CALLED afterModule')
}

module.exports.meta = require('./package.json')
