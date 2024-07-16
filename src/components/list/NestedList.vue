<template>
  <ul v-if="Array.isArray(items)">
    <li v-for="(item, index) in items" :key="index">
      <nested-list :items="item" />
    </li>
  </ul>
  <ul v-else-if="typeof items === 'object'">
    <li v-for="(value, key) in items" :key="key">{{ key }}: {{ value }}</li>
  </ul>
  <li v-else>
    {{ items }}
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'NestedList',
  props: {
    items: {
      type: undefined,
      required: true,
    },
  },
})
</script>
