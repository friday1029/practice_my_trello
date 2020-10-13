<template>
  <div class="card">
    {{card.name}}
  </div>
</template>
<script>
export default {
  name: 'Card', 
  props: ["card"], 
}
</script>
<style lang="scss" scoped>
  .card {
    @apply .bg-gray-100 .mb-2 .px-2 .py-2 .rounded-sm;
  }
</style>