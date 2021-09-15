<template>
  <transition name="sidebar">
    <div class="absolute top-0 bottom-0 w-1/4 pt-16 text-left bg-gray-700 filter bg-opacity-20"
      v-show="isOpen">

      <div class="relative top-4 right-4 flex justify-center items-center w-8 h-8 ml-auto">
        <VButton
          round
          @click="$emit('close')"
        >
          <Arrow :size="28"/>
        </VButton>
      </div>
    </div>
  </transition>
</template>

<script>
import Arrow from 'vue-material-design-icons/ChevronLeft.vue';
import VButton from "../../ui/VButton";

export default {
  name: 'ProfileSidebar',

  components: {VButton, Arrow},

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform $default-transition;
}

.sidebar-enter,
.sidebar-leave-to {
  transform: translateX(-110%);
}
</style>
