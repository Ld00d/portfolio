<template>
  <div class="post-view">
    <div v-html="postHtml"></div>
    <div class="post-date">{{post.moment.format('LLL')}}</div>
  </div>
</template>

<script>
import blogSvc from '@/services/blogSvc'

export default {
  name: 'PostView',
  props: ['post'],
  data() {
    return {
      postHtml: ''
    }
  },
  watch: {
    post: function(n) {
      blogSvc.getBlogContent(n.title).then(c => {
        this.postHtml = c
      })
    }
  }
}

</script>

<style scoped>
.post-view {
  margin-left: 1em;
  margin-right: 3em;
}

</style>
