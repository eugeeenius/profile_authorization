<template>
  <div id="app"
       class="w-full h-screen"
       :class="{'dark': darkMode}">
    <div class="wrap w-full h-full text-gray-900 dark:text-gray-100">
      <VSwitch
        :value="darkMode"
        @input="onToggle"
      />
      <router-view/>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import VSwitch from "./components/VSwitch";

export default {
  components: {VSwitch},

  computed: {
    ...mapState({
      darkMode: state => state.darkMode,
    }),
  },

  methods: {
    ...mapActions(['toggleTheme']),

    onToggle() {
      this.toggleTheme();
      document.body.classList[this.darkMode ? 'add' : 'remove']('bg-gray-900');
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrap {
    transition: color .2s ease;
  }
</style>
