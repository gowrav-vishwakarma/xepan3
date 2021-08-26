<template>
  <dz
    :parent="{ id: '__stage' }"
    :items="items"
    w="100%"
    h="100vh"
    class="developer-stage"
  >
  </dz>
</template>

<script>
import DZ from '../DropZone.vue'

export default {
  components: { dz: DZ },
  props: {
    items: Array,
  },
}
</script>
