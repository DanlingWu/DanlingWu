
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <form name="form" @submit.prevent="handleRegister(user)">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              v-model="user.username"
              required
              type="text"
              class="form-control"
              id="username"
              name="user.username"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="user.password"
              required
              type="text"
              class="form-control"
              id="password"
              name="user.password"
            />
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async handleRegister(user) {
      await this.$store.dispatch("auth/register", user);
      this.$router.push("/Admin");
    },
  },
};
</script>


