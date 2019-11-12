<template>
  <div id="container">
    <center>
      <br />
      <br />
      <br />
      <div>
        <h1>Timeline</h1>
      </div>
      <hr />
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <b-form-group>
          <b-form-textarea v-model="text"></b-form-textarea>
        </b-form-group>
        <b-button id="postBtn" @click="post" variant="outline-primary">Post</b-button>
        <br />
        <br />
        <div id="post-container">
          <b-card>
            <b-card-header id="user">Jane</b-card-header>
            <hr />
            <b-card-body class="card-body">
              <p>Hello World</p>
            </b-card-body>
            <b-card-footer>
              October 08, 2019
              <b-button style="margin-left:25%" variant="outline-secondary">Edit</b-button>
              <b-button style="margin-left:5%" variant="outline-danger">Remove</b-button>
            </b-card-footer>
          </b-card>
        </div>
      </div>
      <div class="col-sm-4"></div>
    </center>
  </div>
</template>
<style scoped>
#postBtn {
  margin-left: 90%;
}
#user {
  margin-right: 90%;
  padding: 5px;
}
</style>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    post(e) {
      e.preventDefault();
      if (this.text !== null) {
        
        let link= `http://localhost:3000/db/create/${this.text}`
        $.ajax({
          url: link,
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
      }
    }
  }
};
</script>