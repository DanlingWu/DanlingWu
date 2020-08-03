<template>
  <div class="container-fluid mt-4">
      <div id="nav">
     <div v-if="isLoggedIn"><a href='/' @click="logout">Logout</a></div>
     <div v-else>You are not logged in</div>
    </div>
    <h1 class="h1">Posts Manager</h1>
    <br>
    <a class="btn" href="/NewPost" >New Post</a>
    <br>
    <br>
    <!--<b-alert :show="loading" variant="info">Loading...</b-alert>-->
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th >ID</th>
              <th>Title</th>
              <th>Updated At</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td><a :href="'/Posts/' + post.id" >{{ post.id }}</a></td>
              <td>{{ post.title }}</td>
              <td>{{ post.created }}</td>
              <td class="text-right">
                <a :href="'/EditPost/' + post.id">Edit</a> -
                <a href="#" @click.prevent="deletePost(post.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed:{
    ...mapState({
        posts: state => state.admin.adminPosts,  //posts is object,
    }),
    ...mapGetters('auth', ['isLoggedIn'])
  },

    //isLoggedIn : function(){ return this.$store.getters.isLoggedIn},

  methods:{
      ...mapActions('admin', {
          editPost: 'editPost',
          addPost: 'addPost',
          deletePost: 'deletePost',
      }),
    logout: function () {
      this.$store.dispatch('auth/logout')
      .then(() => {
        this.$router.push('/Admin')
      })
    },
    created: function () { //handle expired token
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch(logout)
          }
          throw err;
        });
      });
    },
  },

    beforeMount() {
        this.$store.dispatch('admin/loadAdminPosts')
        //this.$store.dispatch('auth/isLoggedIn')
    },
  }
</script>
