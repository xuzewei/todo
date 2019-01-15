<template>
  <v-toolbar color="green" dark fixed>
    <v-toolbar-title class="mr-4">TODO</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat v-if="isLoggedIn">
        <v-icon class="mr-2">playlist_add_check</v-icon>projects
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/register" v-if="!isLoggedIn">
        <v-icon class="mr-2">account_box</v-icon>register
      </v-btn>
      <v-btn flat v-if="!isLoggedIn">
        <v-icon class="mr-2">fingerprint</v-icon>login
      </v-btn>
      <v-btn flat v-if="isLoggedIn">
        <v-icon class="mr-2">exit_to_app</v-icon>logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', ['isLoggedIn']),
  },
};
</script>

<style scoped>
</style>
