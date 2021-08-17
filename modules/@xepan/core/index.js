/* eslint require-await:0 */
  export async function beforeModule() {
    this.nuxt.options.components.push({ path: '~xepan-applications/xepan/components', prefix: 'xEpan' });

      // run before loading module
      console.log('I AM CALLED beforeModule');
  }
  export default async function (context) {
    // module logic
  }
  export async function afterModule() {
      // run after loading module
      console.log('I AM CALLED afterModule');
  }