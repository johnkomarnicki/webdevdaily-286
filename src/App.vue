<script setup lang="ts">
import { computed, ref } from "vue";
import UiImg from "./assets/ui-ux.png";
import WebDevImg from "./assets/web-developer.png";
import GraphicDesignImg from "./assets/graphic-designer.png";
import RoleCard from "./components/RoleCard.vue";
import BaseButton from "./components/BaseButton.vue";

const roles = ref([
  { title: "UI/UX Designer", img: UiImg, active: false },
  { title: "Web Developer", img: WebDevImg, active: false },
  { title: "Graphic Designer", img: GraphicDesignImg, active: false },
]);

function selectRole(index: number) {
  const role = roles.value[index];
  if (role.active) {
    role.active = false;
    return;
  }
  roles.value.forEach((role) => (role.active = false));
  role.active = true;
}

const isRolesSelected = computed(() => {
  return roles.value.some((role) => role.active);
});
</script>

<template>
  <div class="font-Poppins min-h-screen flex justify-center items-center bg-alto-50">
    <div
      class="max-w-[1200px] w-full py-24 mx-auto flex flex-col items-center shadow-lg rounded-xl bg-white"
    >
      <h1 class="text-3xl mb-6">Select your role</h1>
      <p class="mb-10 text-alto-500">
        To start your project we need to customize your preferences.
      </p>
      <div class="flex gap-10">
        <RoleCard
          v-for="(role, index) in roles"
          @click="selectRole(index)"
          :key="role.title"
          :title="role.title"
          :img="role.img"
          :active="role.active"
        />
      </div>
      <div class="flex gap-3 my-10">
        <div
          v-for="n in 4"
          :key="n"
          class="w-2.5 h-2.5 rounded-full bg-alto-200"
          :class="{ '!bg-turquoise-400': n === 3 }"
        ></div>
      </div>
      <BaseButton label="Next" :disabled="!isRolesSelected" />
    </div>
  </div>
</template>

<style scoped></style>
