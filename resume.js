;(function(global) {

  function Resume(file) {
    return new Resume.init(file)
  }

  Resume.init = function(file) {
    this.file = file
  }

  Resume.prototype = {
    version: '1.0.0',
    constructor: Resume,

    load: function(cb, rtype='json') {
      // type can only be `json`, `text` or `blob` for now
      let file = this.file
      let types = ['json', 'text', 'blob']
      let seltype = (types.indexOf(rtype) === -1) ? 'json' : rtype
      fetch(file).then(function(resp) {
        if(resp.ok) {
          resp[seltype]().then(function(data) {
            cb(data)
          })
        } else {
          console.log(`${resp.status} -> ${resp.statusText}`)
        }
      })
    },

    theme: function(theme) {
      /* provided a them, apply css to resume */
      console.log('theme', theme)
      return this
    },

    render: function(elem, data) {
      var script = $(elem).find('script')
      var c = _.template(script.text())
      $(elem).html(c(data))
      return this
    },

    topdf: function(path) {
      console.log('saving resume to pdf ...');
      return this
    }
  }

  Resume.init.prototype = Resume.prototype

  global.Resume = global.R = Resume
}(window));