const fs = require('fs')
const path = require('path')
const _ = require('lodash')

/* eslint require-await:0 */
export async function beforeModule() {
  this.options.components.push({
    path: '~modules/@xepan/webbuilder/components',
    prefix: 'xEpan',
  })

  const _toolsJson = require(path.join(__dirname, 'web-tools.js'))
  console.log('_toolsJson', _toolsJson)
  let toolsJson = fs.readFileSync(
    path.resolve(path.join(__dirname, '../../../assets', 'web-tools.json'))
  )
  toolsJson = _.merge(JSON.parse(toolsJson), _toolsJson)
  fs.writeFileSync(
    path.resolve(path.join(__dirname, '../../../assets', 'web-tools.json')),
    JSON.stringify(toolsJson)
  )
  // run before loading module
  console.log('I AM CALLED beforeModule')
}
export default async function (moduleOptions = {}) {}
export async function afterModule() {}

module.exports.meta = require('./package.json')
