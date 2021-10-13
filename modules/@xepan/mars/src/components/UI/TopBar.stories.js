import YourComponent from './TopBar.vue'

export default {
  title: 'Mars/UI/MainScreen',
  component: YourComponent,
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
})

export const TopBar = Template.bind({})

TopBar.args = {}
