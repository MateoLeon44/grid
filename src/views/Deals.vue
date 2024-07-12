<template>
  <PaginatedTable
    :table-data="displayedData"
    :column-labels="columnLabels"
    :items-per-page="itemsPerPage"
    :total-pages="totalPages"
    :selected-rows="selectedRows"
    @on-sort-values="sortValues"
    @handle-page-navigation="changeCurrentPage"
    @on-row-open="handleOpenPanel"
  >
    <template #header>
      <div class="deals-header">
        <div class="search-bar">
          <label for="search-input">Search:</label>
          <input
            type="text"
            id="search-input"
            v-model="searchTerm"
            @input="onInput"
          />
        </div>
        <PrimaryButton
          @click="downloadJSONAsCSV(data)"
          class="deals-header__button"
        >
          Export .CSV
        </PrimaryButton>
      </div>
    </template>
  </PaginatedTable>
</template>

<script lang="ts">
import PaginatedTable from '@/components/table/PaginatedTable.vue'
import { computed, defineComponent, ref, watch } from 'vue'
import { MOCK_DATA } from '@/data/mock_data'
import { debounce } from 'lodash-es'
import { Deal } from '@/types/deals.type'
import { useSidePanelStore } from '@/stores/sidePanelStore'
import PrimaryButton from '@/components/base/PrimaryButton.vue'
import { downloadJSONAsCSV } from '@/utils/functions/jsonToCsv'

export default defineComponent({
  components: {
    PaginatedTable,
    PrimaryButton,
  },
  setup() {
    const { openPanel, closePanel } = useSidePanelStore()

    /**
     * This could be a constant since it won't change
     * However, a prod environment with information in the backend would make this reactive
     * So I'll let it with a ref
     */
    const data = ref<Deal[]>(MOCK_DATA.data)
    const selectedRows = ref<Set<number>>(new Set())

    const handleOpenPanel = ({ index }) => {
      if (selectedRows.value.has(index)) {
        selectedRows.value.delete(index)
        return
      }
      selectedRows.value.add(index)
      if (selectedRows.value.size > 1) {
        closePanel()
        return
      }
    }

    watch(selectedRows.value, (newVal, oldVal) => {
      if (newVal.size === 1) {
        openPanel('DataDisplayPane', data.value[newVal.values().next().value])
        return
      }
      if (newVal.size === 0) {
        closePanel()
        return
      }
    })

    const searchTerm = ref<string>('')
    const currentPage = ref<number>(1)

    const filteredData = ref<Deal[]>(data.value)

    //This could be defined in the backend api call (totalResults, itemsPerPage, currentPage, data)
    const itemsPerPage = ref<number>(10)

    const totalPages = computed(() =>
      Math.ceil(filteredData.value.length / itemsPerPage.value),
    )

    const columnLabels: string[] = Object.values(MOCK_DATA.labels)

    const updateFilteredData = () => {
      filteredData.value = data.value.filter((row) => {
        return columns.value.some((column) => {
          const value = row[column] ? row[column].toString().toLowerCase() : ''
          return value.includes(searchTerm.value.toLowerCase())
        })
      })
    }

    const sortValues = ({
      value,
      direction,
    }: {
      value: string
      direction: number
    }) => {
      const field = Object.keys(data.value[0])[value]
      filteredData.value.sort((a, b) => {
        const valueA = a[field]
        const valueB = b[field]
        if (valueA < valueB) return -1 * direction
        if (valueA > valueB) return 1 * direction
        return 0
      })
    }

    /**
     * This is a workaround on how it would usually work.
     * I'd recommend that the backend gives only the data from that page and the next page.
     * We usually don't want to receive 10 million data just from doing one request
     */
    const displayedData = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value
      const endIndex = Math.min(
        startIndex + itemsPerPage.value,
        filteredData.value.length,
      )
      return filteredData.value.slice(startIndex, endIndex)
    })

    const restartSelected = () => {
      closePanel()
      selectedRows.value.clear()
    }

    const changeCurrentPage = (page: number) => {
      currentPage.value = page
      restartSelected()
    }

    const columns = ref<string[]>(Object.keys(data.value[0] || {}))

    const debounceUpdateFilteredData = debounce(updateFilteredData, 500)

    return {
      MOCK_DATA,
      onInput: debounceUpdateFilteredData,
      searchTerm,
      columnLabels,
      filteredData,
      sortValues,
      itemsPerPage,
      totalPages,
      changeCurrentPage,
      openPanel,
      displayedData,
      downloadJSONAsCSV,
      data,
      handleOpenPanel,
      selectedRows,
    }
  },
})
</script>

<style lang="scss" scoped>
.deals-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .search-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    #search-input {
      border-radius: 3px;
      border: 1px solid $secondary-color;
    }
  }
}
</style>
