import { shallowMount } from '@vue/test-utils'
import GridComponent from '@/components/table/PaginatedTable.vue'
import Pagination from '@/components/table/Pagination.vue'

describe('GridComponent', () => {
  const mockTableData = [
    { id: 1, column1: 'value1', column2: 'value2' },
    { id: 2, column1: 'value3', column2: 'value4' },
  ]
  const mockColumnLabels = ['Column 1', 'Column 2']

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(GridComponent, {
      props: {
        totalPages: 1,
        tableData: mockTableData,
        columnLabels: mockColumnLabels,
      },
    })
  })

  it('handles page navigation', () => {
    const paginationComponent = wrapper.findComponent(Pagination)
    paginationComponent.vm.$emit('handlePageNavigation', 2)

    expect(wrapper.emitted('handlePageNavigation')[0]).toEqual([2])
  })
})
