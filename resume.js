;(function(global) {
  var document = global.document
  var head = document.getElementsByTagName('head').item(0)
  var link = document.getElementsByTagName('link').item(0)

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

    json: function(file, cb) {
      this.file = file
      if(global.fetch) {
        fetch(file).then(resp => resp.json()).then(function(data) {
          cb(data)
        }).catch(function(err) {
          throw `${err.status} -> ${err.statusText}`
        })
      } else {
        // alternative with XMLHttpRequest ??
      }
    },

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

      if(link) {
        link.setAttribute('href', theme)
      } else {
        var newlink = document.createElement('link')
        newlink.setAttribute('rel', 'stylesheet')
        newlink.setAttribute('type', 'text/css')
        newlink.setAttribute('href', theme)
        head.appendChild(newlink)
      }

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
      },

      dateFormat: function(format) {
        // returns a formatted date
      }
    }
  }

  Resume.init.prototype = Resume.prototype

  global.Resume = Resume.init.prototype
}(this));