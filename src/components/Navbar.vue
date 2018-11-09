<template>
  <div class="navbar pure-menu pure-menu-horizontal pure-menu-fixed">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><router-link class="pure-menu-link" to="/" title="Home">Home</router-link></li>
      <li class="pure-menu-item"><router-link class="pure-menu-link" to="/blog" title="Blog">Blog</router-link></li>
      <li class="pure-menu-item"><router-link class="pure-menu-link" to="/resume" title="Resume">Resume</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.pure-menu-horizontal {
  white-space: normal !important;
}

.navbar-logo {
  max-width: 40px;
  padding: 0.4em;
  margin: 0;
  box-sizing: border-box;
  vertical-align: middle;
}

.navbar {
    padding: 0.4em;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0,0,0, 0.10);
}
.navbar {
    background: var(--light);
}

.pure-menu.pure-menu-fixed {
    border-bottom: none;
}

.navbar .pure-menu-heading {
    color: var(--white);
    font-weight: 400;
    font-size: 120%;
    border-left: 1px solid var(--success);
    border-right: 1px solid var(--success);
}

.navbar .pure-menu-selected a,
.view-title {
    color: var(--primary);
}

.view-title {
  padding-left: .5em;
}

.navbar a {
  color: var(--primary);
}
.navbar li a:hover,
.navbar li a:focus {
    background: none;
    border: none;
    color: var(--orange);
    vertical-align: sub;
}

.navbar ul {
  padding-top: .3em;
}

.navbar .pure-menu-children {
  background-color: var(--success);
  width: 8em;
}

.navbar .pure-menu-children a:hover {
  color: var(--primary)
}

@media (min-width: 48em) {

    .navbar {
        text-align: left;
    }
    .navbar ul {
        float: right;
    }

}
</style>
