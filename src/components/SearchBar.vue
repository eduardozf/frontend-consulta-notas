<script setup lang="ts">
import NFeIcon from './icons/IconNFe.vue'
import SearchIcon from './icons/IconSearch.vue'
import { ref, computed, defineEmits, defineExpose } from 'vue'

const isSearchFocused = ref(false)
const isInputEmpty = ref(true)
const searchQuery = ref('')
const emit = defineEmits(['search'])

const iconClasses = computed(() => ({
  'text-madeira-500': isSearchFocused.value || !isInputEmpty.value,
  'text-gray-400': !isSearchFocused.value && isInputEmpty.value
}))

const onSearchFocus = () => {
  isSearchFocused.value = true
}

const onSearchBlur = () => {
  isSearchFocused.value = false
}

const onSearchChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  searchQuery.value = target.value
  isInputEmpty.value = target.value === ''
}

const submitSearch = (event: Event) => {
  event.preventDefault()
  emit('search', searchQuery.value)
}

const clearInput = () => {
  searchQuery.value = ''
}

defineExpose({
  clearInput
})
</script>

<template>
  <form class="relative flex justify-center w-full" @submit="submitSearch">
    <div class="relative w-7/12 shadow-md">
      <div class="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
        <NFeIcon class="size-[26px]" :class="iconClasses" for="search-madeira-nfe" />
      </div>
      <input
        v-model="searchQuery"
        @focus="onSearchFocus"
        @blur="onSearchBlur"
        @input="onSearchChange"
        id="search-madeira-nfe"
        ref="searchInput"
        type="text"
        :class="iconClasses"
        class="w-full bg-slate-50 text-slate-900 text-sm rounded-s-md block ps-10 p-4 focus:outline-madeira-500 focus:outline-dashed"
        placeholder="Insira o código da nota fiscal ..."
        required
      />
    </div>
    <button
      type="submit"
      class="z-10 p-3.5 text-sm font-medium text-white bg-madeira-500 rounded-e-md hover:bg-madeira-400"
    >
      <SearchIcon class="text-white hover:scale-110" />
      <span class="sr-only">Search</span>
    </button>
  </form>
</template>
