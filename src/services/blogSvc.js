import axios from 'axios'

export default {

  getBlogData() {
    if (this.metadata) {
      return new Promise(resolve => resolve(this.metadata))
    }

    return axios.get('/static/blog/metadata.json').then(r => {
      this.metadata = r.data
      return this.metadata
    })
  },

  getBlogInfo(title) {
    if (!title) {
      return new Promise(resolve => resolve(null))
    }
    return this.getBlogData().then(metadata => {
      var blog = metadata[title]
      return blog
    })
  },

  getBlogContent(title) {
    return this.getBlogInfo(title).then(info => {
      if (!info) {
        return null
      }
      return axios.get('/static/blog/' + info.fileName).then(r => r.data)
    })
  }

}
