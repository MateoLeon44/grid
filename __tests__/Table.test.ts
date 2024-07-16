import { shallowMount } from '@vue/test-utils'
import Table from '@/components/table/Table.vue'

describe('Table component', () => {
  const mockTableData = [
    { id: 1, column1: 'value1', column2: 'value2' },
    { id: 2, column1: 'value3', column2: 'value4' },
  ]
  const mockColumnLabels = ['Column 1', 'Column 2']

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Table, {
      props: {
        tableData: mockTableData,
        columnLabels: mockColumnLabels,
      },
    })
  })

  it('renders table with correct data and column headers', () => {
    expect(wrapper.find('table').exists()).toBe(true)
    expect(wrapper.findAll('th').length).toBe(mockColumnLabels.length)
    expect(wrapper.findAll('tr').length).toBe(mockTableData.length + 1) // +1 for header row
  })

  it('sorts data when header is clicked', async () => {
    const thElements = wrapper.findAll('th')
    await thElements[1].trigger('click')

    const sortedIds = mockTableData.map((row) => row.id.toString()).sort()
    const tdElements = wrapper.findAll('td:nth-child(1)')
    const actualIds = []
    tdElements.forEach((td) => {
      actualIds.push(td.text())
    })

    expect(actualIds).toEqual(sortedIds)
  })

  it('emits row event on click', () => {
    const rows = wrapper.findAll('tr')
    rows[1].trigger('click')

    expect(wrapper.emitted('onRowClick')[0]).toEqual([
      { row: mockTableData[0], index: 0 },
    ])
  })
})
