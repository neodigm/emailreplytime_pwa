<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">

      </v-app-bar-nav-icon>

      <v-toolbar-title>emailreplytime</v-toolbar-title>

<v-tabs
  centered
  class="ml-n9"
  color="grey darken-1"
>
  <v-tab
    v-for="link in links"
    :key="link.caption"
    :to="link.route"
  >
    {{ link.caption }}
  </v-tab>

</v-tabs>

    </v-app-bar>

    <v-main>
    <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null ,
      links: [
        {"caption": "Dashboard", "route": "About"},
        {"caption": "Messages", "route": "About"},
        {"caption": "Profile", "route": "About"},
        {"caption": "Updates", "route": "EnhancedTable"}
      ],
    }),
  }
</script>