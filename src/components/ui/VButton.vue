<template>
  <button class="v-button flex items-center h-8 px-4 rounded dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 duration-300"
          @click.prevent="$emit('click')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VButton',
};
</script>
