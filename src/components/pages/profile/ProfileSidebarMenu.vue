<template>
  <div>
    <router-link
        v-for="(item, index) in items"
        :key="item.title + index"
        :to="item.path"
        class="flex justify-center py-2 text-lg cursor-pointer border-left border-r-4 border-opacity-0 hover:border-opacity-50 dark:border-white transition-border-opacity duration-300"
        :class="{'border-opacity-100': item.path === $route.path}"
    >
      <component
        :is="item.icon"
        :size="28"
      />

      <div class="ml-4">{{ item.title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProfileSidebarMenu',

  data() {
    return {
      items: [
        {
          title: 'User Info',
          path: '/profile/info',
          icon: () => import('vue-material-design-icons/Account.vue'),
        },
        {
          title: 'Settings',
          path: '/profile/settings',
          icon: () => import('vue-material-design-icons/Cog.vue'),
        },
      ],
    };
  },

  watch: {
    $route() {
      this.$route;
    },
  },
};
</script>
