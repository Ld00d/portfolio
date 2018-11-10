<template>
  <div class="education">
    <div>{{education.degree}}</div>
    <div class="pure-g">
      <div class="pure-u-1-3 school" >{{education.school}}</div>
      <div class="pure-u-1-3">{{education.location}}</div>
      <div class="pure-u-1-3">{{education.dates}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ResumeEducation',
  props: ['education']
}
</script>

<style scoped>
.school {
  font-style: italic;
}
</style>
