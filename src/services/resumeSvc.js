import axios from 'axios'

export default {

  getResumeData() {
    return axios.get('/static/resume.json')
  }
}
