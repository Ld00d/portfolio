<template>
  <div class="home">
    <div class="pure-g">
      <div class="pure-u-1">
        <h1>My Portfolio</h1>
      </div>
      <div class="pure-u-1">
        <img class="circles" src="/static/circles.png" title="Just some random circles" />
        <p>
          This is a website I threw together to demonstrate some of my know-how with regard to software development. The UI is running on <a href="https://vuejs.org" title="Vue.js">Vue.js</a>. <a href="https://purecss.io" title="Pure.css">Pure.css</a> is providing a responsive grid layout and some other UI styles. I also made the silly picture on the right to break things up.
        </p>
        <p>
          I started out on the web somewhere around 1998 by making web pages using an editor to write the HTML directly. Later, I was doing some kind of advanced data entry for my work, and I got bored with the repetitive tasks. A friend of mine was taking programming courses and thought I would enjoy it. I started taking a VB class and wrote simple utils in Excel. Eventually, I got myself into the software development group at that company. We were working on a Windows application for the users to do the data entry that I was once doing.
        </p>
        <p>
          Since then, I have been all over the stack professionally. AngularJS and KnockoutJS single page applications, Java REST services, Web services in WCF, ASP.Net WebForms, and Windows .Net applications.
        </p>
        <p>
          I also have some personal projects that you can see on <a href="https://github.com/Ld00d" title="GitHub">GitHub</a> including this one that you're looking at right now.
        </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

.circles {
  float:right;
  width: 200px;
  padding: 1em;
}

</style>
