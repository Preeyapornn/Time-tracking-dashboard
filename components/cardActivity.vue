<script setup>
const props = defineProps({
  title: "",
  timeframes: {
    current: "",
    previous: "",
  },
  color: "",
  alt: "",
});
</script>

<template>
  <div class="relative sm:py-3">
    <div
      class="rounded-lg p-3 flex flex-col justify-start"
      :style="`z-index: 1; background-color: ${color};`"
    >
      <div>
        <IconWork class="lg:ml-40" v-if="color === '#ff8b64'" />
        <IconPlay class="lg:ml-40" v-if="color === '#56c2e6'" />
        <IconStudy class="lg:ml-40" v-if="color === '#ff5e7d'" />
        <IconExcercise class="lg:ml-40" v-if="color === '#4bcf83'" />

        <IconSocial class="lg:ml-40" v-if="color === '#7434d1'" />
        <IconSelfCare class="lg:ml-40" v-if="color === '#f1c75b'" />
      </div>
    </div>

    <div
      class="bg-[#1d204b] rounded-xl text-[10px] -mt-5 w-full py-7"
      style="z-index: 2; position: relative"
    >
      <div class="-mt-2 ml-5">
        <div class="grid grid-cols-2 col-span-2">
          <p class="text-white">{{ title }}</p>
          <img
            src="../assets/images/icon-ellipsis.svg"
            class="w-auto sm:ml-[11em] md:ml-5 lg:ml-14 mt-1"
            alt=""
          />
        </div>

        <p class="text-3xl mt-5 mb-3 font-thin">{{ timeframes.current }}hrs</p>
        <p>Last Week - {{ timeframes.previous }}hrs</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
