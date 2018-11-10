import axios from 'axios'

export default {

  getResumeData() {
    if (this.resume) {
      return new Promise(resolve => resolve(this.resume))
    }

    return axios.get('/static/resume.json').then(r => {
      this.resume = r.data
      return this.resume
    })
  }
}
