<template>
  <div class="sidebar" :class="{ show: isOpen }">
    <div class="sidebar_overlay">
      <div class="sidebar_panel_content">
        <component :is="component" :data="data" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useSidePanelStore } from '@/stores/sidePanelStore'
import DataDisplayPane from '@/components/taskPanes/DataDisplayPane.vue'

export default defineComponent({
  components: { DataDisplayPane },
  setup() {
    const store = useSidePanelStore()
    const { closePanel } = store

    const isOpen = computed(() => store.isOpen)
    const component = computed(() => store.component)
    const data = computed(() => store.componentData)

    return {
      closePanel,
      isOpen,
      component,
      data,
    }
  },
})
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  height: 100vh;
  width: 25vw;
  top: 0;
  right: 0;
  left: auto;
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;
  background-color: $primary-color;
  z-index: 99;

  &.show {
    transform: translateX(0);
  }
}

.sidebar_overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 100;
}

.sidebar_panel {
  position: absolute;
  width: 365px;
  z-index: 1001;
  inset: 0 0 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: blue;
  border: none;
  border-left: 2px solid red;

  .close_button {
    align-self: flex-end;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: 65px;
    outline: none;
  }
}
</style>
