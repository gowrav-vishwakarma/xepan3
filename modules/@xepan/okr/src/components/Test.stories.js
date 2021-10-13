import YourComponent from './Test.vue'

export default {
  title: 'OKRs/Junk',
  component: YourComponent,
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
})

export const Test = Template.bind({})

Test.args = {}