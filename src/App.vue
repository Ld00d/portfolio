<template>
  <div id="app">
    <navbar/>
    <router-view class="content-view"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
#app {

}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.3em;
}

h3 {
  font-size: 1.1em;
  font-style: italic;
}

a {
  color: var(--primary);
}

a:hover {
  color: var(--orange);
  text-decoration: none;
}

.content-view {
  margin-top: 4em;
}
</style>
