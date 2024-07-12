<template>
  <div class="grid-container">
    <div class="grid-header">
      <slot name="header"></slot>
    </div>
    <div class="grid-body">
      <table>
        <thead>
          <tr>
            <th v-for="(column, index) in columnLabels" :key="column">
              <span class="grid-header" @click="sort(index)">
                {{ column }}
                <span v-show="sortField === index && sortOrder === 'asc'">
                  &#x25B2;
                </span>
                <span v-show="sortField === index && sortOrder === 'desc'">
                  &#x25BC;
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="{ active: selectedRows.has(index) }"
            v-for="(row, index) in tableData"
            :key="row.id"
            @click="openRow(row, index)"
          >
            <td v-for="column in row" :key="column">
              {{ Array.isArray(column) ? column.join(', ') : column }}
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
        :total-pages="totalPages"
        @handle-page-navigation="handlePageNavigation"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import Pagination from '@/components/table/Pagination.vue'

export default defineComponent({
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
    selectedRows: {
      type: Set,
      default: new Set(),
    },
  },
  components: { Pagination },
  emits: ['onSortValues', 'handlePageNavigation', 'onRowOpen'],
  setup(props, { emit }) {
    const sortField = ref<number>(0)
    const sortOrder = ref<string>(props.defaultSortOrder)
    const currentPage = ref(1)

    const handlePageNavigation = (pageNumber) => {
      emit('handlePageNavigation', pageNumber)
    }

    const openRow = (row: object, index: number) => {
      emit('onRowOpen', { row, index })
    }

    const sort = (field: number) => {
      sortField.value = field
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
      const direction = sortOrder.value === 'asc' ? 1 : -1

      emit('onSortValues', { value: field, direction })
    }

    return {
      sortField,
      sortOrder,
      sort,
      currentPage,
      handlePageNavigation,
      openRow,
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

.grid-header,
.grid-body {
  flex: 1;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
}

.grid-header {
  display: flex;
}

table {
  width: 100%;
  border-collapse: collapse;
  height: 300px;
}

th,
td {
  text-align: left;
  width: 100px;
  max-width: 100px;
  white-space: normal;
  word-wrap: break-word;
  border-bottom: 1px solid #ddd;
  padding: 3px;
}

th,
tr {
  cursor: pointer;
}

.active {
  background-color: $tertiary-color;
  color: $primary-color;
}
</style>
