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
  color="grey darken-4"
>
  <v-tab
    v-for="link in topLinks"
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
      gml: {
        CLIENT_ID: "moc.tnetnocresuelgoog.sppa.dki77hf1pcn0av4g6bqplvegme3vt7br-588785168029",
        API_KEY: "cSKqVlnKe5S-e2ReiJxB-Vr2Z_JLf4jLBySazIA",
        DISCOVERY_DOCS: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
        SCOPES: 'https://www.googleapis.com/auth/gmail.readonly'
      },
      drawer: null ,
      topLinks: [
        {"caption": "Dashboard", "route": "mainDash"},
        {"caption": "Messages", "route": "mainMessages"},
        {"caption": "Invite", "route": "mainInvite"},
        {"caption": "Profile", "route": "mainProfile"}
      ],
    }),
    mounted() {
    this.$nextTick(function () {
console.log("-------- mounted");
if(vGM) vGM.init();
    })
    }
  }
</script>