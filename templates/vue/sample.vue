<template>
  <div :class="{active:isActive}" @click="toggle"><span v-if="isActive">On</span></div>
</template>

<script>
export default { data() { return { isActive: false } }, methods: { toggle() { this.isActive = !this.isActive } } }
</script>

<style scoped>
.active{color:red}
</style>
