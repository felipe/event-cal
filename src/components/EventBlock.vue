<template>
  <div>
    <h2>{{ event.id }}</h2>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'EventBlock',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
