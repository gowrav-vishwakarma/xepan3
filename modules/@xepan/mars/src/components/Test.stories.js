import YourComponent from './Test.vue'

export default {
  title: 'Mars/Test',
  component: YourComponent,
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
})

export const FirstStory = Template.bind({})

FirstStory.args = {
  /* The args you need here will depend on your component */
  a: 1,
  text: 'HIII...',
}

export const SecondStory = Template.bind({})

SecondStory.args = {
  /* The args you need here will depend on your component */
  a: 1,
  text: 'HIII...There',
}
