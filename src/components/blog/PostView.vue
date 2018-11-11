<template>
  <div class="post-view">
    <div v-html="postHtml"></div>
    <div class="post-date">{{postDate}}</div>
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
  },
  computed: {
    postDate: function() {
      if (this.post && this.post.moment) {
        return this.post.moment.format('LLL')
      } else {
        return ''
      }
    }
  }

}

</script>

<style scoped>
.post-view {
  margin-left: 1em;
  margin-right: 3em;
}

.post-date {
  font-style: italic;
  color: var(--gray)
}

</style>
