<template>
  <div id="Header">
    <b-navbar fixed="top" toggleable="lg" type="light" variant="light">
      <!-- <b-navbar-brand href="#" id="title">UGrab</b-navbar-brand> -->
      <b-card-img :src="require('assets/header.png')" class="rounded-0" id="userIcon"></b-card-img>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item v-on:click="redirect('/register')" v-if="auth.user === null">Sign Up</b-nav-item>
          <b-nav-item v-on:click="redirect('/login')" v-if="auth.user === null">Login</b-nav-item> -->
          <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit" v-on:click="redirect('/register')"  id="register">Register</b-button>&nbsp;&nbsp;&nbsp; -->
            <b-form-input class="input" placeholder="Email"></b-form-input>&nbsp;&nbsp;&nbsp;
            <b-form-input class="input" placeholder="Password"></b-form-input>&nbsp;&nbsp;&nbsp;
          <b-button type="submit" v-on:click="redirect('/login')" id="login">Login</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import ROUTER from "router";
import AUTH from 'services/auth'
export default {
  
  data() {
    return {
      auth: AUTH,
    };
  },
  methods: {
    redirect(route) {
      ROUTER.push(route);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/color.scss";
// #title {
//   color: $warning !important;
// }
#userIcon {
  width:7%;
  height:auto;
}
#login{
  background:$motif;
}
.input{
  border-color:$motif;
}
</style>

