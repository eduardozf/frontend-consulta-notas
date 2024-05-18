<template>
  <tr class="bg-white border-b hover:bg-slate-100 hover:text-slate-900">
    <td class="px-4 py-4 font-medium text-slate-900 whitespace-nowrap">
      <slot name="nfeNumber"></slot>
    </td>
    <td class="px-4 py-4"><slot name="issueDate"></slot></td>
    <td class="px-4 py-4"><slot name="issuer"></slot></td>
    <td class="px-4 py-4"><slot name="recipient"></slot></td>
    <td class="px-4 py-4">R$ <slot name="price"></slot></td>
  </tr>
</template>
