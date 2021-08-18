/* eslint require-await:0 */
  export async function beforeModule() {
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