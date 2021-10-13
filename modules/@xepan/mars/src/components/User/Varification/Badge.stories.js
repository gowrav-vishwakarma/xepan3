import YourComponent from './Badge.vue'

export default {
  title: 'Mars/Users/Varification',
  component: YourComponent,
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
})

export const Badge = Template.bind({})

Badge.argTypes = {
  status: {
    options: ['none', 'email', 'mobile', 'govtId', 'biometic'],
    control: { type: 'inline-radio' },
    defaultValue: '',
  },
}
