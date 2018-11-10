<template>
  <div class="resume-experience">
    <h3>{{ experience.company }} <span v-if="experience.contract" class="contract">(Contract)</span></h3>
    <div class="pure-g">
      <div class="pure-u-1-3 title">{{experience.title}}</div>
      <div class="pure-u-1-3">{{experience.location}}</div>
      <div class="pure-u-1-3">{{experience.dates}}</div>
    </div>
    <div class="skills"><span v-for="(s, sIdx) in experience.skills" :key="sIdx">{{s}} &nbsp;</span></div>
    <ul>
      <li v-for="(a, aIdx) in experience.accomplishments" :key="aIdx">{{a}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ResumeExperience',
  props: ['experience']
}
</script>

<style scoped>

.contract {
  font-size: .8em;
  color: var(--gray);
  font-style: normal;
  font-weight: lighter;
}

.title {
  font-style: italic;
}

.skills {
  margin-top: .5em;
}

</style>
