<template>
  <div class="pagination">
    <div class="pagination-buttons">
      <button :disabled="currentPage === 1" @click="prevPage">&lt;</button>

      <button
        v-for="page in pagesToShow"
        :key="page"
        :class="{ active: currentPage === page, dots: page === '...' }"
        @click="page !== '...' && setPage(page)"
      >
        {{ page }}
      </button>

      <button :disabled="currentPage === totalPages" @click="nextPage">
        &gt;
      </button>
    </div>

    <span>Page {{ currentPage }} of {{ totalPages }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'Pagination',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
  },
  emits: ['handlePageNavigation'],
  setup(props, { emit }) {
    const currentPage = ref<number>(1)

    const emitPageNavigation = () => {
      emit('handlePageNavigation', currentPage.value)
    }

    const nextPage = () => {
      if (currentPage.value < props.totalPages) {
        currentPage.value++
        emitPageNavigation()
      }
    }

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--
        emitPageNavigation()
      }
    }

    const setPage = (page: number) => {
      currentPage.value = page
      emitPageNavigation()
    }

    const pagesToShow = computed(() => {
      const pages = []
      if (props.totalPages <= 5) {
        for (let i = 1; i <= props.totalPages; i++) {
          pages.push(i)
        }
      } else {
        if (currentPage.value <= 3) {
          pages.push(1, 2, 3, '...', props.totalPages)
        } else if (currentPage.value >= props.totalPages - 2) {
          pages.push(
            1,
            '...',
            props.totalPages - 2,
            props.totalPages - 1,
            props.totalPages,
          )
        } else {
          pages.push(
            1,
            '...',
            currentPage.value - 1,
            currentPage.value,
            currentPage.value + 1,
            '...',
            props.totalPages,
          )
        }
      }
      return pages
    })

    return {
      nextPage,
      prevPage,
      currentPage,
      setPage,
      pagesToShow,
    }
  },
})
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 10px;

  .pagination-buttons {
  }

  button {
    background-color: $primary-color;
    border: none;
    color: $secondary-color;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:disabled {
      background-color: #c0c0c0;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: $secondary-color;
      color: $primary-color;
    }

    &.active {
      background-color: $secondary-color;
      color: $primary-color;
    }

    &.dots {
      cursor: default;
      pointer-events: none;
      background-color: transparent;
      color: #000;
    }
  }

  span {
    margin-left: 10px;
  }
}
</style>
