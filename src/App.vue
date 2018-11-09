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

a {
  color: var(--primary);
}

a:hover {
  color: var(--orange);
  text-decoration: none;
}

.content-view {
  margin: 3em;
  margin-top: 4em;
}
</style>
