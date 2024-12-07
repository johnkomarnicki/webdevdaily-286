<script setup lang="ts">
defineProps<{
  title: string;
  img: string;
  active: boolean;
}>();
</script>

<template>
  <div
    class="px-[60px] pt-12 pb-14 border-2 border-alto-200 rounded-xl cursor-pointer"
    :class="{ 'border-turquoise-500 shadow': active }"
  >
    <img :src="img" alt="" class="max-w-[150px] w-full" />
    <p class="mt-4 text-lg text-center" :class="{ 'text-turquoise-500': active }">{{ title }}</p>
  </div>
</template>

<style scoped></style>
