<script setup lang="ts">
import NFeIcon from './icons/IconNFe.vue'
import SearchIcon from './icons/IconSearch.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      isSearchFocused: false,
      isInputEmpty: true
    }
  },
  computed: {
    iconClasses() {
      return {
        'text-madeira-500': this.isSearchFocused || !this.isInputEmpty,
        'text-gray-400': !this.isSearchFocused && this.isInputEmpty
      }
    }
  },
  methods: {
    onSearchFocus() {
      this.isSearchFocused = true
    },
    onSearchBlur() {
      this.isSearchFocused = false
    },
    onSearchChange(event: any) {
      this.isInputEmpty = event.target.value === ''
    }
  }
}
</script>

<template>
  <form class="relative flex justify-center w-full">
    <div class="relative w-7/12 shadow-md">
      <div class="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
        <NFeIcon class="size-[26px]" :class="iconClasses" for="search-madeira-nfe" />
      </div>
      <input
        @focus="onSearchFocus"
        @blur="onSearchBlur"
        @input="onSearchChange"
        id="search-madeira-nfe"
        type="text"
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
