<template>
  <div id="app"
       class="w-full h-screen"
       :class="{'dark': darkMode}">
    <div class="wrap w-full h-full text-gray-800 dark:text-gray-100">
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
import VSwitch from "./components/ui/VSwitch";

export default {
  components: {VSwitch},

  computed: {
    ...mapState({
      darkMode: state => state.darkMode,
    }),
  },

  created() {
    this.loadThemeState();
    this.toggleBodyClass();
  },

  methods: {
    ...mapActions(['loadThemeState', 'setTheme']),

    onToggle() {
      this.setTheme(!this.darkMode);
      this.toggleBodyClass();
    },

    toggleBodyClass() {
      document.body.classList[this.darkMode ? 'add' : 'remove']('bg-gray-800');
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrap {
    transition: color .2s ease;
  }
</style>
