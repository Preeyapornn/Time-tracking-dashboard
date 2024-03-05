<script setup lang="ts">
let activity = [
  {
    id: 1,
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
    color: "#ff8b64",
    alt: "icon-work",
  },
  {
    id: 2,
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
    color: "#56c2e6",
    icon: "IconPlay",
    alt: "icon-play",
  },
  {
    id: 3,
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
    color: "#ff5e7d",
    alt: "icon-study",
  },
  {
    id: 4,
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
    color: "#4bcf83",
    alt: "icon-exercise",
  },
  {
    id: 5,
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
    color: "#7434d1",
    alt: "icon-social",
  },
  {
    id: 6,
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
    color: "#f1c75b",
    alt: "icon-self-care",
  },
];

const status = ref("weekly");

watch(status, (newVal, oldVal) => {
  console.log("new :" + newVal, "old :" + oldVal);
  console.log(status.value);
});

const showTimeFrame = computed(() => {
  if (status.value === "daily") {
    return activity.map((item) => {
      return {
        title: item.title,
        color: item.color,
        timeframes: item.timeframes.daily,
        icon: item.icon,
        alt: item.alt,
      };
    });
  }
  if (status.value === "weekly") {
    return activity.map((item) => {
      return {
        title: item.title,
        color: item.color,
        timeframes: item.timeframes.weekly,
        icon: item.icon,
        alt: item.alt,
      };
    });
  }
  if (status.value === "monthly") {
    return activity.map((item) => {
      return {
        title: item.title,
        color: item.color,
        timeframes: item.timeframes.monthly,
        icon: item.icon,
        alt: item.alt,
      };
    });
  }
});
console.log(showTimeFrame.value);
</script>

<template>
  <div class="desktop pt-36">
    <div
      class="container1 sm:px-5 lg:px-56 grid lg:grid-cols-4 lg:grid-rows-2 gap-4"
    >
      <div class="lg:row-span-1 leftZone grid relative">
        <!-- left zone -->
        <div
          class="bg-[#5746ea] rounded-lg profile lg:flex-col relative z-10 sm:mb-0 lg:pl-8 lg:pt-3 lg:pb-14"
        >
          <!-- top zone -->
          <div
            class="topZone flex lg:flex-col sm:justify-center lg:justify-start pt-6"
          >
            <div>
              <img
                src="../assets/images/image-jeremy.png"
                class="sm:w-[4em] lg:w-20 mb-4 object-cover rounded-full border-2 border-white"
                alt="image-jeremy"
              />
            </div>
            <div class="">
              <p class="sm:text-base lg:text-xs my-2">Report for</p>
              <h1 class="sm:text-xl lg:text-3xl sm:pb-4">Jeremy Robson</h1>
            </div>
          </div>
        </div>
        <!-- but zone -->
        <div
          class="butZone text-[#5746ea] flex sm:justify-center sm:py-6 sm:-mt-3 lg:flex-col bg-[#1d204b] lg:-mt-3 rounded-b-lg sm:text-xl lg:text-[10px]"
          style="z-index: 0"
        >
          <button
            class="my-1"
            :class="status === 'daily' ? 'text-white' : ''"
            @click="status = 'daily'"
          >
            Daily
          </button>
          <button
            class="my-1"
            :class="status === 'weekly' ? 'text-white' : ''"
            @click="status = 'weekly'"
          >
            Weekly
          </button>
          <button
            class="my-1"
            :class="status === 'monthly' ? 'text-white' : ''"
            @click="status = 'monthly'"
          >
            Monthly
          </button>
        </div>
      </div>
      <!-- right zone  -->
      <div class="lg:col-span-3 grid lg:grid-cols-3 gap-5">
        <CardActivity
          v-for="(item, index) in showTimeFrame"
          :key="index"
          :title="item.title"
          :color="item.color"
          :timeframes="item.timeframes"
          :icon="item.icon"
          :alt="item.alt"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
@media screen and (min-width: 375px) {
  .container1 {
    width: 100%;
    display: grid;
  }
  .butZone {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
  .topZone {
    display: flex;
    gap: 1em;
  }
}

@media screen and (min-width: 768px) {
  .butZone {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
