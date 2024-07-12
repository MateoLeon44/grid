<template>
  <button class="primary-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['click'],
  setup(_, { emit }) {
    const handleClick = (event) => {
      emit('click', event)
    }

    return {
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.primary-button {
  background-color: rgb(0, 163, 218);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.primary-button:hover {
  background-color: $tertiary-color;
}
</style>
