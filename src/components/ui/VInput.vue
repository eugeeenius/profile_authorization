<template>
  <div class="v-input text-left"
       :class="{'_wrong': wrong}">
    <div class="v-input__cell relative w-full px-3 py-2 rounded leading-none dark:bg-gray-800 transition-all duration-300">
      <input
        v-model="lazyValue"
        :type="password ? 'password' : 'text'"
        class="w-full h-full bg-transparent dark:placeholder-gray-500"
        :placeholder="!lazyValue && !isFocused ? placeholder : ''"
        @input="$emit('input', lazyValue)"
        @change="$emit('change', lazyValue)"
        @keydown.enter="$event.target.blur()"
        @blur="isFocused = false"
        @focus="isFocused = true"
      >
    </div>

    <span class="v-input__error text-xs text-red-600">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    wrong: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    password: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      lazyValue: this.value,
      isFocused: false,
    };
  },

  watch: {
    value(val) {
      this.lazyValue = val;
    },

    isFocused(val) {
      if (val) return;
      this.$emit('change', this.lazyValue);
    },
  },

  // methods: {
  //   onInput(e) {
  //     this.lazyValue = e.t
  //     if (this.password) {
  //       e.target.value = this.lazyValue.split('');
  //     }
  //
  //     this.$emit('input', this.lazyValue);
  //   },
  // },
};
</script>

<style lang="scss">
.v-input {
  $block: &;

  &__error {
    position: absolute;
    opacity: 0;
    transform: translate(4px, 7px);
    transition: opacity $default-transition;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  &._wrong {

    #{$block}__error {
      visibility: initial;
      opacity: 1;
    }
  }
}
</style>

