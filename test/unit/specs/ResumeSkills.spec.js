import Vue from 'vue'
import ResumeSkills from '@/components/resume/ResumeSkills'

describe('ResumeSkills', () => {
  it('divides the skills array into columns properly', () => {
    const Constructor = Vue.extend(ResumeSkills)
    const skills = ['1', '2', '3', '4', '5']
    const vm = new Constructor({propsData: {skills: skills}}).$mount()

    expect(vm.skillsTable).toEqual([['1', '2', '3', '4'], ['5']])

  })
})
