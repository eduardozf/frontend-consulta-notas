<script setup lang="ts">
import TableItem from './NFeTableItem.vue'
import NoContent from './TableNoContent.vue'
</script>

<script lang="ts">
import { ref } from 'vue'

const itemList = ref<any[]>([
  {
    chave: '01234567890123456789012345678901234567890123',
    data_emissao: '18/05/2024',
    data_recebimento: '18/05/2024',
    cnpj: '10490181000135'
  }
])
</script>

<template>
  <div class="w-full min-h-96 bg-white rounded-md overflow-hidden">
    <table class="w-full text-sm text-left text-slate-500">
      <thead class="text-sm text-white uppercase bg-slate-700">
        <tr class="font-bold">
          <th class="px-4 py-4 w-5/12">Chave</th>
          <th class="px-4 py-4 w-3/12">CNPJ</th>
          <th class="px-4 py-4">Data de Emissão</th>
          <th class="px-4 py-4">Data de Recebimento</th>
        </tr>
      </thead>
      <tbody>
        <NoContent v-if="!itemList?.length" />
        <TableItem v-for="item in itemList" :key="item.chave">
          <template #chave>{{ item.chave }}</template>
          <template #data_emissao>{{ item.data_emissao }}</template>
          <template #data_recebimento>{{ item.data_recebimento }}</template>
          <template #cnpj>{{ item.cnpj }}</template>
        </TableItem>
      </tbody>
    </table>
  </div>
</template>
