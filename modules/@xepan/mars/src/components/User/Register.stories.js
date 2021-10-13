import YourComponent from './Register.vue'

export default {
  title: 'Mars/Users/LoginRegister',
  component: YourComponent,
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
})

export const Register = Template.bind({})

Register.args = {}
Register.argTypes = {
  // backgroundColor: { control: 'color' },
}
