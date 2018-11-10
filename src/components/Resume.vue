<template>
  <div>
    <h1>{{ resume.name }}</h1>
    <h2>Summary</h2>
    <div>{{ resume.summary }}</div>
    <h2>Skills</h2>
    <resume-skills :skills="resume.skills" />
    <h2>Experience</h2>
    <div>
      <div v-for="(exp, expIdx) in resume.experience" :key="expIdx">
        <resume-experience :experience="exp" />
      </div>
    </div>
    <h2>Education</h2>
    <div v-for="(ed, edIdx) in resume.education" :key="edIdx">
      <resume-education :education="ed" />
    </div>
  </div>
</template>

<script>
import resumeSvc from '@/services/resumeSvc'
import ResumeSkills from '@/components/resume/ResumeSkills'
import ResumeExperience from '@/components/resume/ResumeExperience'
import ResumeEducation from '@/components/resume/ResumeEducation'

export default {
  name: 'Resume',
  components: {ResumeSkills, ResumeExperience, ResumeEducation},
  data() {
    return {
      resume: {}
    }
  },
  created() {
    resumeSvc.getResumeData().then(r => {
      this.resume = r.data
    })
  }
}
</script>

<style scoped>

</style>
