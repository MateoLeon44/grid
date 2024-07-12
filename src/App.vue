<template>
  <SidePanel />
  <Deals />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SidePanel from '@/components/taskPanes/SidePanel.vue'
import Deals from '@/views/Deals.vue'

export default defineComponent({
  components: { SidePanel, Deals },
})
</script>
