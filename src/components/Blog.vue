<template>
  <div class="blog">
    <div class="pure-g">
      <div class="pure-u-1-4">
        <post-list :posts="posts"/>
      </div>
      <div class="pure-u-3-4">
        <post-view :post="post"/>
      </div>
    </div>
  </div>
</template>

<script>

import PostList from '@/components/blog/PostList'
import PostView from '@/components/blog/PostView'
import blogSvc from '@/services/blogSvc'
import moment from 'moment'
import titleSvc from '@/services/titleSvc'

export default {
  name: 'Blog',
  components: {PostList, PostView},
  props: ['title'],
  data() {
    return {
      postsObj: {},
      posts: [],
      post: {}
    }
  },
  watch: {
    title: function(n) {
      if (n && this.postsObj && this.postsObj[n]) {
        this.post = this.postsObj[n]
      } else if (!n && this.posts.length) {
        this.post = this.posts[0]
      }
    }
  },
  created() {

    blogSvc.getBlogData().then(d => {
      var postsObj = d

      this.postsObj = postsObj

      var posts = []

      for (var obj in postsObj) {
        var post = postsObj[obj]
        post.createdDate = new Date(post.createdDate)
        post.moment = moment(post.createdDate)
        posts.push(post)
        if (post.title === this.title) {
          this.post = post
        }
      }

      if (!this.post.title && posts.length) {
        this.post = posts[0]
      }

      posts.sort((a, b) => (b.createdDate - a.createdDate))
      this.posts = posts

      titleSvc.updateTitle(`Blog > ${this.post.title}`)
    })
  }
}
</script>

<style scoped>

</style>
