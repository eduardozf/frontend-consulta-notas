<script setup lang="ts">
import { ref } from 'vue'
import { api } from './api'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import NFeTable from './components/NFeTable.vue'
import TitleAndSub from './components/TitleAndSub.vue'
import SearchBar from './components/SearchBar.vue'

const toast = useToast()
const tableData = ref<Array<NotaFiscal>>([])
const searchbarRef = ref()

const showToast = (type: 'info' | 'error', message: string) => {
  toast.add({
    severity: type,
    detail: message,
    life: 3_000
  })
}

const handleSearch = async (key: string) => {
  try {
    const response = await api.get(`/nota-fiscal/${key}`)
    if (!response.data.length) throw Error('Empty response')

    tableData.value.push(...response.data)
    showToast('info', 'Nota Fiscal Encontrada.')
    clearSearch()
  } catch (error) {
    showToast('error', 'Nota Fiscal não encontrada.')
    console.error(error)
  }
}

const clearSearch = () => {
  searchbarRef.value.clearInput()
}
</script>

<template>
  <Toast><template #icon></template> </Toast>
  <main class="flex justify-center w-full min-h-screen py-20 bg-slate-200">
    <div id="container" class="flex flex-col w-3/5 gap-10">
      <section class="flex flex-col gap-5">
        <TitleAndSub>
          <template #title>Pesquisa de Nota Fiscal Eletrônica</template>
          <template #sub>
            Consulta Simplificada de Notas Fiscais Eletrônicas do Madeira Madeira
          </template>
        </TitleAndSub>
        <SearchBar @search="handleSearch" ref="searchbarRef" />
      </section>
      <section>
        <NFeTable :item-list="tableData" />
      </section>
    </div>
  </main>
</template>
