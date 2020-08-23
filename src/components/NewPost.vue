<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
            <form @submit.prevent="handleFormSubmit(post)" id="addPostForm">
            <p class="h4 text-center mb-4">New Post</p>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control border" v-model="post.title" name="post.title">
            </div>
            <br>
            <div class="form-group">
                <label for="title">Headline Image</label>
                <input type="file" id="header_image" class="form-control border" ref="header_image" name="header_image">
            </div>
            <br>
            <div class="form-group">
                <label for="content">Body</label>
                <textarea class="form-control border" type="text" id="content" rows="5" v-model="post.body" name="post.body"></textarea>
            </div>
             <CategoryMenu  @CustomEventInputChanged="updateCategoryId"></CategoryMenu>
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
import CategoryMenu from '@/components/CategoryMenu'
import axios from 'axios'

export default {
  data() {
    return {
      post: {},
      category_id: '',
      file: ''
    }
  },
  components: { CategoryMenu },
  methods:{
    updateCategoryId (id) {
      this.post.category_id = id
    },
    async handleFormSubmit(post) {
      var form = document.forms.addPostForm;
      var formData = new FormData(form);
      formData.append("category_id", post.category_id )

      await this.$store.dispatch('admin/addPost', formData)

      this.$router.push('/Admin')
    }
  },
  beforeMount() {
        this.$store.dispatch('admin/loadAdminPosts')
  },
}
</script>
<!-- emit: trigger named event(s) which in turn cause functions called listeners to be called.-->