'use strict';

module.exports = function (grunt) {
  // Load grunt tasks automatically.
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    compass: {
      build: {
        options: {
          config: "compass.rb",
          bundleExec: true,
          sourcemap: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        '!src/**/*.hbs.js'
      ]
    },
    mochaTest: {
      dist: {
        src: ['spec/*.js', 'spec/**/*.js']
      }
    },
    watch: {
      dist: {
        files: ['src/*.js', 'src/**/*.js'],
        tasks: ['jshint:all', 'mochaTest:dist', 'build', 'copy:base']
      }
    },
    browserify: {
      options: {},
      dist: {
        src: './src/rw-widgets.js',
        dest: './dist/rw-widgets.js'
      }
    },
    connect: {
      watch: {
        options: {
          base: 'example',
          port: 9000,
          open: true
        }
      },
      standalone: {
        options: {
          base: 'example',
          port: 9000,
          open: true,
          keepalive: true
        }
      }
    },
    copy: {
      base: {
        files: [
          {
            expand: true,
            src: 'dist/*',
            dest: 'example'
          },
          {
            expand: true,
            src: 'bower_components/**',
            dest: 'example'
          },
          {
            expand: true,
            src: "src/**/*.hbs.js",
            dest: "example/templates/",
            flatten: true,
            filter: "isFile"
          }
        ]
      }
    },
    uglify: {
      dist: {
        files: {
          "dist/rw-widgets.min.js": ["dist/rw-widgets.js"]
        }
      }
    }
  });

  grunt.registerTask('lint', ['jshint:all']);
  grunt.registerTask('build', ['browserify:dist', 'uglify:dist', 'compass']);
  grunt.registerTask('serve', ['copy:base', 'connect:standalone']);
  grunt.registerTask('default', ['build', 'copy:base', 'connect:watch', 'watch:dist']);
};
