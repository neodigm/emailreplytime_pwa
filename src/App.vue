<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
<br>
<div class="text-center">
  <v-btn id="btnGgl__in" ref="btnGgl__in"
  rounded color="primary" dark
  @click.prevent = "login"
  >
  Sign In to Google 
  </v-btn>
</div>

<br>
<div class="text-center">
  <v-btn id="btnGgl__out" ref="btnGgl__out"
  rounded color="primary" dark
  @click.prevent = "login"
  >
  Sign Out
  </v-btn>
</div>
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
import Vue from 'vue'
import VueGapi from 'vue-gapi'

function doRevr( sIn = "tacocat" ){ return sIn.split("").reverse().join(""); }

let oGMLParam = {
  clientId: doRevr("moc.tnetnocresuelgoog.sppa.dki77hf1pcn0av4g6bqplvegme3vt7br-588785168029"),
  apiKey: doRevr("cSKqVlnKe5S-e2ReiJxB-Vr2Z_JLf4jLBySazIA"),
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
  scope: "https://www.googleapis.com/auth/gmail.readonly"
}

Vue.use(VueGapi, oGMLParam)
export default {
  data: () => ({
    "drawer": false ,
    "topLinks": [
      {"caption": "Dashboard", "route": "mainDash"},
      {"caption": "Messages", "route": "mainMessages"},
      {"caption": "Invite", "route": "mainInvite"},
      {"caption": "Profile", "route": "mainProfile"} ],
  }),
  methods: {
      login() {
        this.$gapi.getGapiClient().then((gapi) => {
          // gapi.sheets.spreadsheet.get(...)
          // ...
        })
      }
  }
}

</script>