<template>
  <div class="profile w-full h-full relative">
    <ProfileHeader
      :user="user"
      @click="isSidebarOpen = !isSidebarOpen"
    />

    <ProfileSidebar
      :is-open="isSidebarOpen"
      @close="isSidebarOpen = false"
    />

    <div class="w-full h-full pt-16 pl-72">
      <transition name="appear"
                  mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import ProfileHeader from '@/components/pages/profile/ProfileHeader.vue';
import ProfileSidebar from "../components/pages/profile/ProfileSidebar";

export default {
  name: 'Profile',

  components: {ProfileSidebar, ProfileHeader},

  computed: {
    ...mapState({
      user: state => state.user,
      isLogged: state => state.isLogged,
    }),
  },

  data() {
    return {
      isSidebarOpen: true,
    };
  },

  async created() {
    if (!this.user && !this.isLogged) {
      await this.$router.push({name: 'Login'});
      return;
    }

    this.setIsLoading(true);

    if (this.user)  {
      setTimeout(() => {
        this.setIsLoading(false);
      }, 2000);
      return;
    }
    await this.fetchUserData();

    this.setIsLoading(false);
  },

  methods: {
    ...mapActions(['fetchUserData', 'setIsLoading']),
  },
};
</script>
