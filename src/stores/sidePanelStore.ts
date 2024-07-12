import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidePanelStore = defineStore('sidePanel', () => {
  const isOpen = ref<Boolean>(false)
  const component = ref<string | null>(null)
  const componentData = ref<object | null | undefined>(null)

  const openPanel = (comp: string, data?: object) => {
    isOpen.value = true
    component.value = comp
    componentData.value = data
  }

  const closePanel = () => {
    component.value = null
    isOpen.value = false
    componentData
  }

  return {
    openPanel,
    isOpen,
    component,
    componentData,
    closePanel,
  }
})
