<template>
  <div class="v-checkbox flex items-center">
    <div class="flex justify-center items-center w-5 h-5 rounded-sm dark:bg-gray-800 cursor-pointer"
         @click="$emit('input', !value)">
      <Check
        class="dark:text-gray-300"
        v-if="value"
        :size="16"
      />
    </div>

    <span v-if="label"
          class="ml-2 text-xs dark:text-gray-400"
          v-html="label"></span>
  </div>
</template>

<script>
import Check from 'vue-material-design-icons/Check.vue';

export default {
  name: 'VCheckbox',

  components: {Check},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>
