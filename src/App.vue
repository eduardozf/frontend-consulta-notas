<script setup lang="ts">
import NFeTable from './components/NFeTable.vue'
import TitleAndSub from './components/TitleAndSub.vue'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <main class="flex justify-center w-full min-h-screen py-20 bg-slate-200">
    <div id="container" class="flex flex-col w-3/5 gap-10">
      <section class="flex flex-col gap-5">
        <TitleAndSub>
          <template #title>Pesquisa de Nota Fiscal Eletrônica</template>
          <template #sub>
            Consulta Simplificada de Notas Fiscais Eletrônicas do Madeira Madeira
          </template>
        </TitleAndSub>
        <SearchBar />
      </section>
      <section>
        <NFeTable li />
      </section>
    </div>
  </main>
</template>
