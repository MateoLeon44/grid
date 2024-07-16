<template>
  <ul>
    <li v-for="key in Object.keys(data.labels)" :key="key">
      <strong>{{ data.labels[key] }}: </strong>
      <template v-if="Array.isArray(data.deal[key])">
        <ul>
          <li v-for="(item, index) in data.deal[key]" :key="index">
            <NestedList :items="item"></NestedList>
          </li>
        </ul>
      </template>
      <span v-else>{{ data.deal[key] }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NestedList from '@/components/list/NestedList.vue'

export default defineComponent({
  components: { NestedList },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
})
</script>
