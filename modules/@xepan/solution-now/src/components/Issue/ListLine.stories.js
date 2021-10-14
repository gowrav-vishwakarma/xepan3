import YourComponent from './ListLine.vue'

export default {
  title: 'Solution Now/Issues',
  component: YourComponent,
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
})

export const SingleIssue = Template.bind({})

SingleIssue.args = {
  issue: {
    title: 'Dummy Issue, With short detail as title here',
    description:
      'This is a bit long long description. This is a bit long long description. This is a bit long long description. This is a bit long long description. This is a bit long long description. This is a bit long long description. ',
    budget: {
      amount: 200,
      per: 'Hourly',
      currency: 'inr',
    },
    type: 'Live',
    media: {},
    languages: ['En', 'Hi'],
    createdAt: new Date(),
    stack: ['VuejS', 'MySQL'],
    user: {
      verification: 'mobile',
    },
  },
}
