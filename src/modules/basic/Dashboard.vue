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
            <b-button v-on:click="redirect('/authorizationForm')" variant="primary">Connect</b-button>
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
#tracking{
  width: 90%;
  float: right;
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