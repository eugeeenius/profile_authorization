<template>
  <div class="v-switch rounded-full bg-gray-600 dark:bg-gray-200"
       @click="$emit('input', !value)">
    <div class="v-switch__handle rounded-full bg-gray-200 dark:bg-gray-600"
         :class="classes"></div>
  </div>
</template>

<script>
export default {
  name: 'VSwitch',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return this.value ? '_right' : '_left';
    },
  },
};
</script>

<style lang="scss">
  .v-switch {
    position: relative;
    width: 34px;
    height: 20px;
    cursor: pointer;
    transition: transform .2s, background-color $theme-transition;

    &__handle {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 50%;
      transition: transform $default-transition, background-color $theme-transition;

      &._left {
        transform: translate3d(2px, -50%, 0);
      }

      &._right {
        left: initial;
        transform: translate3d(100%, -50%, 0);
      }
    }
  }
</style>
