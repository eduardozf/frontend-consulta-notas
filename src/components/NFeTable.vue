<script setup lang="ts">
import TableExemple from './TableBodyExemple.vue'
</script>

<template>
  <table class="w-full text-sm text-left text-slate-500 rounded-md overflow-hidden">
    <thead class="text-sm text-white uppercase bg-slate-600">
      <tr class="font-bold">
        <th class="px-4 py-4">Número</th>
        <th class="px-4 py-4">Data de Emissão</th>
        <th class="px-4 py-4">Emitente</th>
        <th class="px-4 py-4">Destinatário</th>
        <th class="px-4 py-4">Valor Total</th>
      </tr>
    </thead>
    <tbody>
      <TableExemple />
    </tbody>
    <tfoot class="bg-slate-50 border-solid border-t-[1px] border-neutral-200">
      <tr>
        <td colspan="4" class="px-4 py-4"></td>
        <td colspan="1" class="px-4 py-4 font-bold text-slate-900">Total: R$ 99.999,00</td>
      </tr>
    </tfoot>
  </table>
</template>
