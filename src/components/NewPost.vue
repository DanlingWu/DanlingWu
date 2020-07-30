<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">

            <form @submit.prevent="handFormSubmit(post)">
            <p v-if="post === null || post === undefined" class="h4 text-center mb-4">New Post</p>
            <p v-else class="h4 text-center mb-4">Edit Post: {{post.title}}</p>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control border" v-model="post.title" name="post.title">
            </div>
            <br>
            <div class="form-group">
                <label for="content">Body</label>
                <textarea class="form-control border" type="text" id="content" rows="5" v-model="post.body" name="post.body"></textarea>
            </div>
            <div class="text-center mt-4">
                <button class="btn btn-outline-purple" type="submit">Save<i class="far fa-paper-plane ml-2"></i></button>
            </div>
            </form>
        </div>
    </div>
</div>

</div>

</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "UpdateUser",
  data() {
    return {
      post: {},
    }
  },
  computed:
    mapState({
        posts: state => state.admin.adminPosts,  //posts is object,
    }),
  methods:{
   async handFormSubmit(post) {
      await this.$store.dispatch('admin/addPost', post)
      this.$router.push('/Admin')
    }
   },
  beforeMount() {
        this.$store.dispatch('admin/loadAdminPosts')
  },
  }



</script>
<!-- emit: trigger named event(s) which in turn cause functions called listeners to be called.-->