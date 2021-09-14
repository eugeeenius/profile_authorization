<template>
  <div class="w-full h-full flex-shrink-0 overflow-hidden rounded-full">
      <div class="w-full h-full"
           :style="{backgroundImage: `url(${image})`}"></div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePicture',

  props: {
    image: {
      type: String,
      default: '',
    },
  },
};
</script>
