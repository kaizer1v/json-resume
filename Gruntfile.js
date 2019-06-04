module.exports = grunt => {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  let port = grunt.option('port') || 9009;
  let root = grunt.option('root') || '.';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: port,
          base: root,
          livereload: true,
          open: true,
          useAvailablePort: true,
          keepalive: true
        }
      }
    },

    watch: {

    }

  });  // initConfig


  // Serve presentation locally
  grunt.registerTask('serve', ['connect']);
}