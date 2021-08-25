/* eslint require-await:0 */
export async function beforeModule() {
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

  console.log('I AM CALLED afterModule')
}

module.exports.meta = require('./package.json')
