<template>
  <div class="skills">
    <div class="pure-g" v-for="(r, rIdx) in skillsTable" :key="rIdx">
      <div class="pure-u-1-4" v-for="(s, idx) in r" :key="idx">{{s}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeSkills',
  props: ['skills'],
  data() {
    return {
      skillsTable: []
    }
  },
  watch: {
    skills: function(n) {
      this.skillsTable = []
      var row = []
      for (var i = 0; i < n.length; i++) {
        row.push(n[i])
        if ((i + 1) % 4 === 0 || i + 1 === n.length) {
          this.skillsTable.push(row)
          row = []
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
