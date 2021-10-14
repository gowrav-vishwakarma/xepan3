import YourComponent from './List.vue'

export default {
  title: 'Solution Now/Issues',
  component: YourComponent,
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
})

export const List = Template.bind({})

List.args = {}
