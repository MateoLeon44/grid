import { mount, shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Deals from '@/views/Deals.vue'
import { MOCK_DATA } from '@/data/mock_data'
import { createPinia, setActivePinia } from 'pinia'

describe('Deals', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly', () => {
    const wrapper = shallowMount(Deals)
    expect(wrapper.exists()).toBe(true)
  })

  it('filters data based on search term', async () => {
    const wrapper = mount(Deals)
    const input = wrapper.find('#search-input')
    await input.setValue('search-term')
    await input.trigger('input')

    await new Promise((resolve) => setTimeout(resolve, 600))

    expect(wrapper.vm.filteredData).toHaveLength(
      MOCK_DATA.data.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes('search-term'),
        ),
      ).length,
    )
  })

  it('sorts data correctly', async () => {
    const wrapper = mount(Deals)

    wrapper.vm.sortValues({ value: '0', direction: 1 })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.filteredData[0].id <= wrapper.vm.filteredData[1].id).toBe(
      true,
    )

    wrapper.vm.sortValues({ value: '0', direction: -1 })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.filteredData[0].id >= wrapper.vm.filteredData[1].id).toBe(
      true,
    )
  })
})
