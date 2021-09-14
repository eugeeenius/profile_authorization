<template>
  <form class="flex flex-col items-center text-center px-12 py-8 rounded-md bg-white dark:bg-gray-700 shadow-xl"
        :class="{'filter blur pointer-events-none': isLoading}">
    <div class="flex flex-col items-center">
      <AccountCircle :size="100"/>

      <div class="pt-3">
        <h4 class="text-xl">Sign in</h4>
        <p class="mt-1 text-xs text-gray-400">Enter your credentials bellow</p>
      </div>
    </div>

    <div class="w-full mt-5">
      <VInput
        class="transition-all duration-300"
        :class="isEmailWrong ? 'mb-8' : 'mb-2'"
        :value="email"
        :wrong="isEmailWrong"
        placeholder="Email"
        errorMessage="Incorrect email"
        @change="onInput('email', $event)"
        @click.native="isEmptyFields = false"
      />

      <VInput
        :value="password"
        :wrong="isPasswordWrong || isEmptyFields"
        placeholder="Password"
        :errorMessage="bottomErrorMessage"
        password
        @change="onInput('password', $event)"
        @click.native="isEmptyFields = false"
      />
    </div>


    <div class="flex justify-between w-full px-3 mt-8">
      <VCheckbox
        v-model="remember"
        label="Sign in automatically on each visit"
      />

      <VButton @click="onButtonClick">
        Sign In
      </VButton>
    </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex';
import {email, minLength} from 'vuelidate/lib/validators';
import AccountCircle from 'vue-material-design-icons/AccountCircle.vue';
import VInput from "../../ui/VInput";
import VCheckbox from "../../ui/VCheckbox";
import VButton from "../../ui/VButton";

export default {
  components: {VButton, VCheckbox, VInput, AccountCircle},

  data() {
    return {
      email: '',
      password: '',
      remember: false,
      isLoading: false,
      isEmptyFields: false,
    };
  },

  validations: {
    email: {
      email,
    },
    password: {
      minLength: minLength(8),
    },
  },

  computed: {
    isEmailWrong() {
      return this.$v.email.$error;
    },

    isPasswordWrong() {
      return this.$v.password.$error;
    },

    bottomErrorMessage() {
      if (this.isEmptyFields) {
        return 'Please, fill in all the fields above';
      }
      return 'Password should be at least 8 characters long';
    },
  },

  watch: {
    isLoading(val) {
      this.$emit('on-loading', val);
    },
  },

  methods: {
    ...mapActions(['setIsLogged', 'setUser', 'fetchUserData']),

    onInput(inputType, val) {
      this[inputType] = val;
      this.$v[inputType].$touch();
    },

    async onButtonClick() {
      if (!this.email.length || !this.password.length) {
        this.isEmptyFields = true;
        return;
      }
      if (this.isEmailWrong || this.isPasswordWrong) {
        return;
      }
      if (this.remember) {
        this.setIsLogged();
      }

      this.isLoading = true;
      await this.fetchUserData();
      this.isLoading = false;

      await this.$router.push({name: 'Profile'});
    },
  },

};
</script>

<style lang="scss" scoped>
form {
  width: 520px;
}
</style>
