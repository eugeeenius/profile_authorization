<template>
  <div class="w-full h-full relative">
    <transition name="appear"
                appear>
      <div class="form">
        <LoginForm @on-loading="isLoading = $event"/>

        <div v-if="isLoading"
             class="loader">
          <Loader/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
import LoginForm from "../components/pages/login/LoginForm";
import Loader from "../components/Loader";

export default {
  name: 'Login',

  components: {Loader, LoginForm},

  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    ...mapState({
      user: state => state.user,
      isLogged: state => state.isLogged,
    }),
  },

  created() {
    if (!this.isLogged) {
      return ;
    }

    this.$router.push({name: 'Profile'});
  },
};
</script>

<style lang="scss" scoped>
  .form {
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
</style>
