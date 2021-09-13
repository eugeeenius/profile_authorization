<template>
  <div class="w-full h-full relative">
    <div class="form">
      <LoginForm @on-loading="isLoading = $event"/>

      <div v-if="isLoading"
           class="loader">
        <Loader/>
      </div>
    </div>
  </div>
</template>

<script>
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

  beforeRouteEnter(to, from, next) {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'));
    if (!isLogged) {
      return next();
    }

    next({name: 'Profile'});
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
