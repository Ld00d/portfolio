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
      columns: 4
    }
  },
  computed: {
    skillsTable: function() {
      if (!this.skills) {
        return []
      }
      const table = []
      var row = []
      for (var i = 0; i < this.skills.length; i++) {
        row.push(this.skills[i])
        if ((i + 1) % this.columns === 0 || i + 1 === this.skills.length) {
          table.push(row)
          row = []
        }
      }
      return table
    }
  }
}
</script>

<style scoped>

</style>
