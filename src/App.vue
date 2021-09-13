<template>
  <div id="app"
       class="w-full h-screen"
       :class="{'dark': darkMode}">
    <div class="wrap w-full h-full bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50 overflow-hidden"
         :class="{'theme-transition': isThemeChanging}">
      <VSwitch
        :value="darkMode"
        @input="onChangeTheme"
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

  data() {
    return {
      isThemeChanging: false,
    };
  },

  computed: {
    ...mapState({
      darkMode: state => state.darkMode,
    }),
  },

  created() {
    this.loadAppState();
  },

  methods: {
    ...mapActions({
      loadAppState: 'loadAppState',
      setTheme: 'setTheme',
    }),

    onChangeTheme() {
      this.isThemeChanging = true;

      this.setTheme(!this.darkMode);

      setTimeout(() => {
        this.isThemeChanging = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrap {
    position: relative;
    transition: color .2s ease;
  }
</style>
