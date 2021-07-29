<template>
  <section>
    <p>You should see some text below.</p>
    <wp-content :html="testHtml" />
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      testHtml:
        '<div><p>HTML worked.</p> <it-worked text="Component worked."/><v-btn dark> sada s</v-btn></div>',
    }
  },
  computed: {
    testHtml1() {
      return '<div><p>HTML worked.</p> <it-worked text="Component worked."/><v-btn dark> sada s</v-btn></div>'
    },
  },
}
</script>
