<template>
  <div class="rounded border-2 border-black dark:border-white border-opacity-30 text-center transition-border-opacity duration-300 hover:border-opacity-50">
    <VInput
      :value="value"
      :mask="mask"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
import VInput from "../../ui/VInput";

export default {
  name: 'ProfileInfoField',

  components: {VInput},

  props: {
    value: {
      type: String,
      default: '',
    },
    mask: {
      type: String,
      default: '',
    },
  },
};
</script>
