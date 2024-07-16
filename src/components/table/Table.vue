<template>
  <table>
    <thead class="grid-header">
      <tr class="grid-header__row">
        <th v-for="(column, index) in columnLabels" :key="column">
          <span class="grid-header__column" @click="sort(index)">
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
        :class="{ active: activeHighlight(row) }"
        v-for="(row, index) in tableData"
        :key="row"
        @click="rowClick(row, index)"
      >
        <td v-for="column in row" :key="column">
          {{ Array.isArray(column) ? column.join(', ') : column }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  props: {
    activeHighlight: {
      type: Function,
      default: () => undefined,
    },
    defaultSortOrder: {
      type: String,
      default: 'asc',
    },
    columnLabels: {
      type: Array as PropType<string[]>,
      required: true,
    },
    tableData: {
      type: undefined,
      required: true,
    },
  },
  emits: ['onRowClick', 'onSortValues'],
  setup(props, { emit }) {
    const sortField = ref<number>(0)
    const sortOrder = ref<string>(props.defaultSortOrder)

    const sort = (field: number) => {
      sortField.value = field
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
      const direction = sortOrder.value === 'asc' ? 1 : -1

      emit('onSortValues', { value: field, direction })
    }

    const rowClick = (row: object, index: number) => {
      emit('onRowClick', { row, index })
    }

    return {
      sort,
      sortField,
      sortOrder,
      rowClick,
    }
  },
})
</script>

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  height: 300px;
}

.grid-header__row {
  position: sticky;
  top: 0;
  background-color: $primary-color;
}

th,
td {
  text-align: left;
  width: 100px;
  max-width: 100px;
  white-space: normal;
  word-wrap: break-word;
  border-bottom: 1px solid #ddd;
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
