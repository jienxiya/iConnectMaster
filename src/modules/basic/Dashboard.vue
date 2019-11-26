<template>
  <div>
    <div id="cardBody">
      <b-card id="cardWhole" no-body>
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
                            <div id="card">
                                    <b-row no-gutters>
                                    <b-col md="5">
                                       <b-card-img :src="require('assets/user.png')" id="userIcon" class="rounded-0"></b-card-img>
                                    </b-col>
                                    <b-col md="7">
                                        <b-card-body>
                                            <b-form-input class="card" plaintext="true" value="Mary Jane Paller"></b-form-input><br>
                                            <b-form-input class="card" plaintext="true" value="Danao, Bohol"></b-form-input><br>
                                            <b-button v-on:click="redirect('/authorizationForm')" id="connectBtn">Connect</b-button>
                                        </b-card-body>
                                    </b-col>
                                    </b-row>
                            </div>
                        </center>
                    </b-col>
                    <b-col cols="4">
                        
                    </b-col>
                    <b-col cols="4">
                        
                    </b-col>
                </b-row>
            </b-container>
          </b-tab>
      <!-- Tab 2 -->
          <b-tab title="Activities">
            <div v-for="(item,index) in data" :key="index">
              <b-card>
                <b-card-text>{{item.account_id}}</b-card-text>
                <b-card-text>{{item.fName}}</b-card-text>
                <b-card-text>{{item.lName}}</b-card-text>
              </b-card>
            </div>
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
                  <b-card id="cardTracking" scrollable>
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

<script>
import ROUTER from "router"
export default {
  name: "cardBody",
  mounted(){
    this.managePusher();
  },
  data() {
    return {
      data:[]
    };
  },
  component: {

  },
  methods: {
    redirect(route){
      ROUTER.push(route);
    },
    managePusher(){
      let user = {
        account_id:1
      }
      var channel = this.$pusher.subscribe('my-channel');
      channel.bind('my-event', ({data}) => {
        if(parseInt(data.account_id) == user.account_id){
          this.data.unshift(data)
        }
      });
    }
  },
};
</script>

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
  box-shadow: 3px 5px 15px 3px #888888;
  border-radius: 7px;
}
.card{
  text-align: center;
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
#connectBtn{
  background-color: $motif;
}
#addBtn{
 background-color: $motif;
}
.motif{
    border-color: $motif;
}
#userIcon{
  height:160px;
  margin-top: 18%;
  width: auto;
}




</style>