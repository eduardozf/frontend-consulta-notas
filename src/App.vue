<script setup lang="ts">
import NFeIcon from './components/icons/IconNFe.vue'
import SearchIcon from './components/icons/IconSearch.vue'
import NFeTable from './components/NFeTable.vue'
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
  <main class="flex items-center justify-center w-full py-20 bg-slate-200">
    <div id="container" class="flex flex-col w-3/5 gap-10">
      <section>
        <div id="formContainer" class="flex flex-col gap-5 h-full items-center justify-center">
          <div class="flex flex-col gap-1 items-center text-slate-800">
            <h1 class="text-[2.2rem] uppercase font-bold">Pesquisa de Nota Fiscal Eletrônica</h1>
            <h3 class="text-sm text-neutral-500">
              Consulta Simplificada e Eficiente de Notas Fiscais Eletrônicas do Madeira Madeira
            </h3>
          </div>
          <form class="flex items-center w-3/5 shadow-md">
            <div class="relative flex-1">
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
              class="p-3.5 text-sm font-medium text-white bg-madeira-500 rounded-e-md hover:bg-madeira-600"
            >
              <SearchIcon class="text-white hover:scale-110" />
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
      </section>
      <section>
        <NFeTable />
      </section>
    </div>
  </main>
</template>
