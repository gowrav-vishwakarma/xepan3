/* eslint require-await:0 */
export async function beforeModule() {
  this.options.components.push({
    path: '~modules/@xepan/solution-now/src/components',
    prefix: 'xEpanSolutionNow',
  })
  // run before loading module
  // this.addTemplate({
  //   fileName: '~/.nuxt/xepanhelpers.modules.js',
  //   src: resolvePath(__dirname, './templates/xepanhelpers.js'),
  // })
  // console.log('Adding Templates')
}
export default async function (context) {
  // module logic
}
export async function afterModule() {
  // run after loading module
}

module.exports.meta = require('../package.json')
