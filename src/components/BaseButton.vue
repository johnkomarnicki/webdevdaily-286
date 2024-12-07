<script setup lang="ts">
defineProps<{
  label: string;
  disabled: boolean;
}>();
</script>

<template>
  <button
    :disabled="disabled"
    class="bg-turquoise-500 hover:bg-turquoise-300 disabled:bg-alto-400 duration-150 py-2.5 px-10 text-lg rounded-lg font-medium"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<style scoped></style>
