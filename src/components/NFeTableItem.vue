<template>
  <tr class="bg-slate-100 border-b hover:bg-slate-200 hover:text-slate-900">
    <td class="px-4 py-4 font-medium text-slate-900 whitespace-nowrap">
      <slot name="chave"></slot>
    </td>
    <td class="px-4 py-4"><slot name="cnpj"></slot></td>
    <td class="px-4 py-4"><slot name="data_emissao"></slot></td>
    <td class="px-4 py-4"><slot name="data_recebimento"></slot></td>
  </tr>
</template>
