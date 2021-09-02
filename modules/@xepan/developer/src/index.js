const fs = require('fs')
const path = require('path')
const _ = require('lodash')

/* eslint require-await:0 */
export async function beforeModule() {
  this.options.components.push({
    path: '~modules/@xepan/developer/src/components',
    prefix: 'xEpanDeveloper',
  })

  // let toolsJson = JSON.parse(
  //   fs.readFileSync(
  //     path.resolve(
  //       path.join(__dirname, '../../../../assets', 'developer-tools.json')
  //     ),
  //     'utf8'
  //   )
  // )

  let toolsJson = {}

  fs.readdirSync(path.join(__dirname, 'developer-tools'))
    .filter((file) => {
      return file.indexOf('.') !== 0 && file.slice(-3) === '.js'
    })
    .forEach((file) => {
      const tool = require(path.join(__dirname, 'developer-tools', file))
      toolsJson = _.merge(toolsJson, tool)
    })

  fs.writeFileSync(
    path.resolve(
      path.join(__dirname, '../../../../assets', 'developer-tools.json')
    ),
    JSON.stringify(toolsJson)
  )
}
export default async function (context) {
  // module logic
}
export async function afterModule() {
  // run after loading module
  // console.log('I AM CALLED afterModule')
}

module.exports.meta = require('../package.json')
