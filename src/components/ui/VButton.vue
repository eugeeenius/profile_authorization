<template>
  <button class="v-button flex justify-center items-center h-8 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 duration-300"
          :class="round ? 'rounded-full w-8' : 'rounded px-4'"
          @click.prevent="$emit('click')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    round: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
