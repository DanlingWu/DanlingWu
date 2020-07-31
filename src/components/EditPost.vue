<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">

            <form @submit.prevent="handFormSubmit(post)">
            <p class="h4 text-center mb-4">Edit Post</p>
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
    computed:
    mapState({
      post: state => state.admin.currentAdminPost,
    }),

  methods:{
   async handFormSubmit(post) {
      await this.$store.dispatch('admin/editPost', post)
      this.$router.push('/Admin')
    }
   },
  beforeMount() {
    this.$store.dispatch('admin/loadAdminPost', { id: parseInt(this.$route.params.id) })

  },
}



</script>
