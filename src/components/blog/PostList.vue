<template>
  <div class="post-list">

    <router-link class="post-item" v-for="(p, pIdx) in posts" :key="pIdx" :to="'/blog/' + p.title">{{p.title}}<br/><span class="post-date">{{p.moment.format('LLL')}}</span></router-link>

  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: ['posts']
}
</script>

<style scoped>

.post-item {
  margin-top: .2em;
  padding: .5em 1em;
  background-color: var(--lighter);
  display: block;
}

.post-item  {
  text-decoration: none;
}

a.post-item:hover {
  background-color: var(--white)
}


.post-date {
  line-height: 1em;
  font-style: italic;
  font-size: .8em;
  color: var(--gray);
}

</style>
