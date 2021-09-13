<template>
  <div class="w-full h-full relative">
    <div class="form">
      <LoginForm/>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/pages/login/LoginForm";

export default {
  name: 'Login',

  components: {LoginForm},

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
</style>
