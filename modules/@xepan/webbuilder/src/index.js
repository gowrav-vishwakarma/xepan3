const fs = require('fs')
const path = require('path')
const _ = require('lodash')

/* eslint require-await:0 */
export async function beforeModule() {
  this.options.components.push({
    path: '~modules/@xepan/webbuilder/src/components',
    prefix: 'xEpan',
  })

  const _toolsJson = require(path.join(__dirname, 'web-tools.js'))
  let toolsJson = fs.readFileSync(
    path.resolve(path.join(__dirname, '../../../../assets', 'web-tools.json'))
  )
  toolsJson = _.merge(JSON.parse(toolsJson), _toolsJson)
  fs.writeFileSync(
    path.resolve(path.join(__dirname, '../../../../assets', 'web-tools.json')),
    JSON.stringify(toolsJson)
  )

  // Admin menus
  const _adminMenus = require(path.join(__dirname, 'admin-menus.js'))
  let adminMenus = fs.readFileSync(
    path.resolve(path.join(__dirname, '../../../../assets', 'admin-menus.json'))
  )
  adminMenus = _.merge(JSON.parse(adminMenus), _adminMenus)
  fs.writeFileSync(
    path.resolve(
      path.join(__dirname, '../../../../assets', 'admin-menus.json')
    ),
    JSON.stringify(adminMenus)
  )
  // run before loading module
}
export default async function (moduleOptions = {}) {}
export async function afterModule() {}

module.exports.meta = require('../package.json')
