<template>
  <div id="app"
       class="w-full h-screen"
       :class="{'dark': darkMode}">
    <main class="main w-full h-full bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50 overflow-hidden"
         :class="{'theme-transition': isThemeChanging}">
<!--      <VSwitch-->
<!--        :value="darkMode"-->
<!--        @input="onChangeTheme"-->
<!--      />-->
      <router-view/>
    </main>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
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

  mounted() {
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
  .main {
    position: relative;
  }
</style>
