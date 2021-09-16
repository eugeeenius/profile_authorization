<template>
  <div class="flex flex-wrap w-full h-full -m-2">
    <div v-for="(field, index) in fields"
         :key="field.title + index"
         class="w-2/4 p-2">
      <span class="mb-2 ml-2 text-xs font-light">{{ field.title }}</span>

      <ProfileInfoField
        :value="field.value"
        :mask="field.mask"
      />
    </div>
  </div>
</template>

<script>
import ProfileInfoField from "./ProfileInfoField";

export default {
  name: 'ProfileFieldList',

  components: {ProfileInfoField},

  props: {
    fields: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
