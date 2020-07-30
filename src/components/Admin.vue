<template>
  <div class="container-fluid mt-4">
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
                <a href="#" @click.prevent="editPost(post)">Edit</a> -
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
import { mapState, mapActions } from 'vuex'

export default {
  computed:
    mapState({
        posts: state => state.admin.adminPosts,  //posts is object,
    }),
  methods:
    mapActions('admin', {
        editPost: 'editPost',
        addPost: 'addPost',
        deletePost: 'deletePost',
    }),

    beforeMount() {
        this.$store.dispatch('admin/loadAdminPosts')
    },
  }
</script>
