<template>
  <div class="grid-container">
    <div class="grid-header">
      <slot name="header"></slot>
    </div>
    <div class="grid-body">
      <!-- No need of creating a store or anything related to prop drilling since there aren't many nested components -->
      <Table
        :active-highlight="activeHighlight"
        :table-data="tableData"
        :default-sort-order="defaultSortOrder"
        :default-sort-field="defaultSortField"
        :column-labels="columnLabels"
        @on-row-click="emitRowClick"
        @on-sort-values="emitSortValues"
      ></Table>
    </div>
    <Pagination
      :total-pages="totalPages"
      @handle-page-navigation="handlePageNavigation"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import Pagination from '@/components/table/Pagination.vue'
import Table from '@/components/table/Table.vue'

export default defineComponent({
  components: { Table, Pagination },
  props: {
    tableData: {
      type: undefined,
      required: true,
    },
    defaultSortField: {
      type: Number,
      default: 0,
    },
    defaultSortOrder: {
      type: String,
      default: 'asc',
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    columnLabels: {
      type: Array as PropType<string[]>,
      required: true,
    },
    initialPage: {
      type: Number,
      default: 1,
    },
    activeHighlight: {
      type: Function,
      default: () => undefined,
    },
  },
  emits: ['onSortValues', 'handlePageNavigation', 'onRowClick'],
  setup(props, { emit }) {
    const currentPage = ref(1)

    const handlePageNavigation = (pageNumber) => {
      emit('handlePageNavigation', pageNumber)
    }

    const emitRowClick = (data) => {
      emit('onRowClick', data)
    }

    const emitSortValues = (data) => {
      emit('onSortValues', data)
    }

    return {
      currentPage,
      handlePageNavigation,
      emitRowClick,
      emitSortValues,
    }
  },
})
</script>

<style lang="scss" scoped>
.grid-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.grid-header {
  width: 100%;
}

.grid-body {
  height: 400px;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
}

.grid-header {
  display: flex;
}
</style>
