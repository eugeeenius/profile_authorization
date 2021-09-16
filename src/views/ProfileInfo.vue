<template>
    <div class="mt-20 ml-20 w-full h-full">
      <div class="w-2/4">
        <div class="flex items-center">
          <div class="w-32 h-32">
            <ProfilePicture
              :image="user.picture.large"
            />
          </div>

          <div class="ml-6">
            <div class="text-lg">{{ user.name.first}} {{ user.name.last}}</div>
            <div class="text-xs font-light">{{ user.location.country }}, {{ user.location.city }}</div>
          </div>
        </div>

        <div class="mt-8 w-full">
          <ProfileFieldList :fields="fields"/>
        </div>

        <VButton class="mt-12"
                 @click="onClick">Save changes</VButton>
      </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import ProfilePicture from "../components/pages/profile/ProfilePicture";
import ProfileFieldList from "../components/pages/profile/ProfileFieldList";
import VButton from "../components/ui/VButton";

export default {
  name: 'ProfileInfo',

  components: {VButton, ProfileFieldList, ProfilePicture},

  computed: {
    ...mapState({
      user: state => state.user,
    }),

    ...mapGetters({
      fields: 'getProfileInfoFields',
    }),
  },

  methods: {
    onClick() {
      alert('Заглушка 🗿');
    },
  },
};
</script>
