import YourComponent from './Filter.vue'

export default {
  title: 'Solution Now/Issues',
  component: YourComponent,
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
})

export const FilterType = Template.bind({})

FilterType.args = {
  filter: {
    stackList: ['Vue', 'Nuxt', 'Node', 'Python', 'Angular'],
    issuetype: ['Setup Issue', 'How to Setup', 'Debug', 'Code Improvement'],
  },
}
