<template>
  <transition name="sidebar">
    <div class="absolute top-0 bottom-0 w-72 pt-16 text-left bg-white dark:bg-gray-700 shadow-xl"
      v-show="isOpen">

      <div class="relative top-4 right-4 flex justify-center items-center w-8 h-8 ml-auto">
        <VButton
          round
          @click="$emit('close')"
        >
          <Arrow :size="28"/>
        </VButton>
      </div>

      <div class="text-center mt-8 text-2xl font-semibold">User Profile</div>

      <ProfileSidebarMenu class="mt-10"/>

      <div class="inline-flex justify-between items-center w-full px-12 mt-20">
        <span>Switch Theme</span>

        <VSwitch
          :value="darkMode"
          @input="setTheme(!darkMode)"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Arrow from 'vue-material-design-icons/ChevronLeft.vue';
import VButton from "../../ui/VButton";
import ProfileSidebarMenu from "./ProfileSidebarMenu";
import VSwitch from "../../ui/VSwitch";

export default {
  name: 'ProfileSidebar',

  components: {VSwitch, ProfileSidebarMenu, VButton, Arrow},

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState({
      darkMode: state => state.darkMode,
    }),
  },

  methods: {
    ...mapActions(['setTheme']),
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
