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
  @click.prevent = "doSignIn"
  >
  Sign In to Google 
  </v-btn>
</div>

<br>
<div class="text-center">
  <v-btn id="btnGgl__out" ref="btnGgl__out"
  rounded color="primary" dark
  @click.prevent = "doSignOut"
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
  export default {
    data: () => ({
      oGMLParam: {
        CLIENT_ID: "moc.tnetnocresuelgoog.sppa.dki77hf1pcn0av4g6bqplvegme3vt7br-588785168029",
        API_KEY: "cSKqVlnKe5S-e2ReiJxB-Vr2Z_JLf4jLBySazIA",
        DISCOVERY_DOCS: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
        SCOPES: "https://www.googleapis.com/auth/gmail.readonly",
        "user": "",
        "oAuthTokn": ""
      },
      "gapi": {},
      "drawer": false ,
      "topLinks": [
        {"caption": "Dashboard", "route": "mainDash"},
        {"caption": "Messages", "route": "mainMessages"},
        {"caption": "Invite", "route": "mainInvite"},
        {"caption": "Profile", "route": "mainProfile"} ],
    }),
    methods: {
      "doRevr": ( sIn = "tacocat" ) => ( sIn.split("").reverse().join("") ),
      "getGmailData": () => {
        console.log("----get email callback ====== == == === ==");

this.oGMLParam.user = this.gapi.auth2.getAuthInstance().currentUser.get();
this.oGMLParam.oAuthTokn = this.oGMLParam.user.getAuthResponse().access_token;
console.log(oAuthTokn);
var xhr = new XMLHttpRequest();
var userId='me';
xhr.open('GET',
    'https://gmail.googleapis.com/gmail/v1/users/'+userId+'/messages');
xhr.setRequestHeader('Authorization',
    'Bearer ' + this.oGMLParam.oAuthTokn);
xhr.send();
xhr.onload=function () {
    var jMsg=JSON.parse(this.response);
    for (let i in jMsg.messages)
    {
  console.log(" -- -- -- -- -- ");
  console.log( jMsg.messages[i].id, this.oGMLParam.user, this.oGMLParam.oAuthTokn );
  console.log(" -- -- -- -- -- ");
      //getMailInfo(jMsg.messages[i].id,userId,this.oGMLParam.oAuthTokn);
    }
}

        console.log("----get email callback ====== == == === ==");
        },
      "doSignIn": () => { gapi.auth2.getAuthInstance().signIn(); },
      "doSignOut": () => { gapi.auth2.getAuthInstance().signOut(); }
    },
    mounted() {
    let _this = this;
    setTimeout(function(){
console.log("-------- mounted");
      if(vGM){
        _this.oGMLParam.CLIENT_ID = _this.doRevr( _this.oGMLParam.CLIENT_ID );
        _this.oGMLParam.API_KEY = _this.doRevr( _this.oGMLParam.API_KEY );
        _this.oGMLParam.btnGgl__in = _this.$refs.btnGgl__in;
        _this.oGMLParam.btnGgl__out = _this.$refs.btnGgl__out;
        _this.getGmailData = _this.getGmailData;
        
        _this.gapi = vGM.vinit( _this.oGMLParam );
  console.log(" vv vv vv vv vv");
  console.log( _this.gapi );
  console.log(" vv vv vv vv vv");

        vGM.init();
      }
    }, 6000)
    }
  }
</script>