<template>
  <div :class="{'w-full h-full': full}">

      <div v-if="isLoading"
           class="w-full h-full flex-shrink-0 rounded-sm bg-gray-200 dark:bg-gray-500 animate-pulse">
        <div class="opacity-0">{{ placeholder }}</div>
      </div>

    <transition name="appear"
                mode="out-in">
      <div v-if="!isLoading"
           key="content"
           :class="{'w-full h-full': full}">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Skeleton',

  props: {
    placeholder: {
      type: String,
      default: '',
    },
    full: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
    }),
  },
};
</script>

<style lang="scss">
.appear-enter-active,
.appear-leave-active {
  transition: opacity .4s;
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
}
</style>
