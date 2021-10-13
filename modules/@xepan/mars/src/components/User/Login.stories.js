import YourComponent from './Login.vue'

export default {
  title: 'Mars/Users/LoginRegister',
  component: YourComponent,
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
})

export const Login = Template.bind({})

Login.args = {}
Login.argTypes = {
  // backgroundColor: { control: 'color' },
}
