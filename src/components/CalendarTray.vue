<template>
  <div>
    <h3>its a calendar innit!</h3>
    <ul>
      <li
        v-for="event in events"
        :key="event.id"
      >
        <EventBlock
          :event="event"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import EventBlock from './EventBlock.vue'

export default {
  name: 'CalendarTray',
  components: {
    EventBlock
  },
  props: {
    events: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    list-style-type: none
  }
</style>
