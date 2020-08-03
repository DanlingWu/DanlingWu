<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <form name="form" @submit.prevent="login(user)">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              v-model="user.username"
              type="text"
              class="form-control border"
              name="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="user.password"
              type="text"
              class="form-control border"
              name="password"
              required
            />
          </div>
          <div class="form-group">
                        <input
              v-model="user.token"
              type="hidden"
            />
            <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      user: {},
      loading: false,
    }
  },
  computed:{
    ...mapState({
        token: state => state.auth.token
    }),
   },
  methods:{
    login(user) {
      this.$store.dispatch('auth/login', user)
      //console.log("my token is: " + localStorage.getItem('user.token'));
      .then(() => this.$router.push('/Admin'))
      .catch(err => console.log(err))

    },
  },
}
</script>

<!--
import axios from 'axios'

const API_URL_Auth = 'http://127.0.0.1:5000/auth'

  methods:{
    async handleLogin(user) {
      console.log(user)
      let res = await axios.post(`${API_URL_Auth}/auth/login`, user)
      console.log(res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data));
      console.log("my token is: " + localStorage.getItem('userToken'));

      this.$router.push('/')
      //await this.$store.dispatch('admin/login', post)
      //this.$router.push('/Admin')
    },
  },

     beforeMount() {
      console.log("my token is: " + user);
      this.$store.dispatch('auth/loadAdminUser')
      console.log("my token is: " + user);
    },
        ...mapActions('auth', {
      handleLogin: 'handleLogin'
    }),
  -->