<template>
  <div class="absolute z-10 top-0 left-0 right-0 flex justify-between items-center px-8 h-16 dark:bg-gray-600 shadow-lg">
    <Burger
      class="cursor-pointer dark:hover:text-gray-400 transition-color duration-300"
      :size="36"
      @click="$emit('click')"
    />

    <div class="flex items-center">
      <Skeleton placeholder="Lorem ipsum dolor.">
        {{ `${user.name.first} ${user.name.last}`}}
      </Skeleton>

      <div class="relative flex-shrink-0 w-10 h-10 ml-2 overflow-hidden rounded-full">
        <Skeleton full>
          <ProfilePicture :image="user.picture.thumbnail" />
        </Skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import Burger from 'vue-material-design-icons/Menu.vue';
import ProfilePicture from './ProfilePicture';
import Skeleton from "../../Skeleton";

export default {
  name: 'ProfileHeader',

  components: {Skeleton, ProfilePicture, Burger},

  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
