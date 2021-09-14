<template>
  <div class="profile w-full h-full relative">
    <ProfileHeader :user="user"/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import ProfileHeader from '@/components/pages/profile/ProfileHeader.vue';

export default {
  name: 'Profile',

  components: {ProfileHeader},

  computed: {
    ...mapState({
      user: state => state.user,
    }),
  },

  data() {
    return {
      isProfileLoading: false,
    };
  },

  async created() {
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

<style lang="scss" scoped>

</style>
