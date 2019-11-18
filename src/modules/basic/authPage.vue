<template>
  <div id="authPage" >
    <b-container fluid>
        <b-row>
            <b-col cols="4">
              <center>
                <h1>Authorization Form</h1>
                <br>
                <b-button id="sendTo">Send To</b-button>
              </center>
            </b-col>
            <b-col cols="8>">
                <div>
                  <b-card>
                    <b-card-text>
                      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                      content.
                    </b-card-text>

                    <b-card-text>A second paragraph of text in the card.</b-card-text>
                  </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>  
  </div>
</template>
<style lang='scss' scoped>
@import "~assets/color.scss";
#authPage{
  margin-top: 6%;
}
#sendTo{
  background-color: $motif;
}
</style>

<script>
import ROUTER from "router"
export default {
  name: "authForm",
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