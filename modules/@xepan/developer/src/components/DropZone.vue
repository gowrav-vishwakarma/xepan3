<template>
  <div
    v-droppable
    v-on="$listeners"
    @mousedown.native.stop.prevent
    @mouseup.native.stop.prevent
    class="dropzone"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, default: () => '1' },
  },
  data() {
    return {
      clickedId: '',
    }
  },

  methods: {
    clicked(id) {
      this.clickedId = id
    },
  },
}
</script>
