<template>
  <div>
    <crud mongoose-model="Project" :headers="headers" class="elevation-1">
      <template #[`item.select`]="{ item }">
        <small class="text--disabled">
          <v-btn x-small color="success" @click="setProject(item)">
            Select
          </v-btn>
        </small>
      </template>
    </crud>
  </div>
</template>

<script>
import crud from '@xepan/developer/components/AppUI/Crud'

export default {
  layout: 'developer',
  components: { crud },
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Status', value: 'status' },
        { text: 'Select', value: 'select' },
      ],
    }
  },

  methods: {
    setProject(item) {
      this.$router.push({
        name: 'DeveloperDashboard',
      })
      this.$store.commit('project/setSelctedProject', item)
    },
  },
}
</script>
