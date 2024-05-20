<template>
  <div id="formContainer" class="flex flex-col h-full items-center justify-center">
    <div class="flex flex-col items-center text-slate-700">
      <h1 class="text-[2.3rem] uppercase font-bold"><slot name="title"></slot></h1>
      <h3 class="text-sm text-neutral-500"><slot name="sub"></slot></h3>
    </div>
  </div>
</template>
