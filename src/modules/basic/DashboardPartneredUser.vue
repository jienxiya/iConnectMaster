<template>
  <div>
    <div id="cardBody">
      <b-card id="card" no-body>
        <b-tabs active-nav-item-class="font-weight-bold text-uppercase text-default" card>
          <!-- Tab 1 -->
          <b-tab title="Online Users" active>
            <b-form-group>
              <i id="searchIcon" class="fa fa-search fa_custom fa-2x"></i>
              <b-form-input id="searchBar" required placeholder="Search Location"></b-form-input>
            </b-form-group>

            <b-container fluid>
                <b-row>
                    <b-col cols="4">
                        <center>
                            <div>
                                <b-card id="user" no-body class="overflow-hidden" style="max-width: 540px;">
                                    <b-row no-gutters>
                                    <b-col md="5">
                                        <b-card-img src="~assets/user.png" class="rounded-0"></b-card-img>
                                    </b-col>
                                    <b-col md="7">
                                        <b-card-body>
                                            <b-card-text>Mary Jane C. Paller</b-card-text>
                                            <b-card-text>Concepcion, Danao, Bohol</b-card-text>
                                            <b-button v-on:click="redirect('/authorizationForm')" id="connectBtn">Connect</b-button>
                                        </b-card-body>
                                    </b-col>
                                    </b-row>
                                </b-card>
                            </div>
                        </center>
                    </b-col>
                    <b-col cols="4">
                        
                    </b-col>
                    <b-col cols="4">
                        
                    </b-col>
                </b-row>
            </b-container>
            <!-- <b-button v-on:click="redirect('/authorizationForm')" id="connectBtn">Connect</b-button> -->
          </b-tab>
      <!-- Tab 2 -->
          <b-tab title="Activities">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
          <!-- TAb 3 -->
          <b-tab title="Track">
            <b-container>
              <b-row>
                <b-col cols="2">
                </b-col>
                <b-col cols="8">
                   <b-form-group label="Tracking No.">
                      <i id="searchIcon" class="fa fa-search fa_custom fa-2x"></i>
                      <b-form-input id="tracking" required placeholder="e.g 123456789012"></b-form-input>
                  </b-form-group>
                  <b-card id="card" scrollable>
                  </b-card>
                </b-col>
                <b-col cols="2">
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <!-- Tab 4 -->
          <b-tab title="Tracking Form">
            <b-container fluid>
              <b-row>
                <b-col cols="1">
                </b-col>
                <b-col cols="9">
                   <b-form-group label="Tracking No:  ">
                      <b-form-input class="motif" required placeholder="Specific Location"></b-form-input>
                  </b-form-group>
                  <b-form-group label="To:">
                      <b-form-input class="motif" type="email" required placeholder="Recepient's Email"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Location:">
                      <b-form-input class="motif" required placeholder="Recepient's Location"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Date:">
                      <b-form-input class="motif" required placeholder="Date"></b-form-input>
                  </b-form-group>
                 
                </b-col>
                <b-col cols="2">
                    <br>
                    <b-button block variant id="addBtn">Add</b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<style lang='scss' scoped>
@import "~assets/color.scss";
#cardBody {
  margin-top: 5%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1%;
  height: 100%;
}
#card{
  border-color: $motif;
}
#searchBar{
  width: 30%;
  float: right;
  border-color: $motif;
}
#searchIcon{
  float: right;
  margin-left: 5px;
}
#user{
    width: 420px;
    border-color: $motif;
}
#tracking{
  width: 90%;
  float: right;
  border-color: $motif;
}
#connectBtn{
  background-color: $motif;
}
#addBtn{
 background-color: $motif;
}
.motif{
    border-color: $motif;
}




</style>

<script>
import ROUTER from "router"
export default {
  name: "cardBody",
  data() {
    return {
      Uname: sessionStorage.getItem("Username")
    };
  },
  component: {

  },
  methods: {
    redirect(route){
      ROUTER.push(route);
    }
  }
};
</script>