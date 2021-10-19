<template>
  <div>
    <XEpanSolutionNowIssueListLine
      v-for="(issue, index) in issueList"
      :key="index"
      :issue="issue"
    />
  </div>
</template>

<script>
export default {
  props: {
    issueList: Array,
  },
}
</script>
