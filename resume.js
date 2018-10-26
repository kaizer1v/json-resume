;(function(global, document) {

  function Resume(file) {
    return new Resume.init(file)
  }

  Resume.init = function(file) {
    this.file = file
    return this
  }

  Resume.prototype = {
    version: '1.1.0',
    constructor: Resume,

    load: function(file, cb, rtype='json') {
      // type can only be `json`, `text` or `blob` for now
      this.file = file
      let types = ['json', 'text', 'blob']
      let seltype = (types.indexOf(rtype) === -1) ? 'json' : rtype
      fetch(file).then(function(resp) {
        if(resp.ok) {
          resp[seltype]().then(function(data) {
            cb(data)
          })
        } else {
          throw `${resp.status} -> ${resp.statusText}`
        }
      })
    },

    theme: function(theme) {
      /* provided a them, apply css to resume */
      console.log('applying theme', theme)
      return this
    },

    /* TODO: remove dependency on `$` */
    render: function(selector, data) {
      var elem = document.querySelector(selector)
      var script = document.querySelector('script' + selector)
      var c = _.template(script.text)
      elem.innerHTML = c(data)
      return this
    },

    jqRender: function(selector, data) {
      var script = $(selector).find('script')
      var c = _.template(script.text())
      $(selector).html(c(data))
      return this
    },

    topdf: function(path) {
      console.log('saving resume to pdf ...');
      return this
    },

    util: {
      titleCase: function(str) {
        return str.replace(/\b(\w)/g, function(s) { return s.toUpperCase(); })
      }
    }
  }

  Resume.init.prototype = Resume.prototype

  global.Resume = Resume.init.prototype
}(window, document));