module.exports = function (grunt) {
    'use strict';

    var version = grunt.file.readJSON('package.json').version;

    grunt.initConfig({
        jshint: {
            all: [
                'src/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    'src/animate/uplayer-0.1.0.js'
                ]
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/running-game.js': [
                        'src/animate/uplayer-0.1.0.js',
                        'src/engine.js',
                        'src/point.js',
                        'src/motion.js',
                        'src/time.js',
                        'src/music.js',
                        'src/scene/loading.js',
                        'src/scene/start.js',
                        'src/animate/extension/sky.js',
                        'src/animate/extension/cloud.js',
                        'src/animate/extension/ground.js',
                        'src/animate/bg.js',
                        'src/animate/person.js',
                        'src/animate/person-super.js',
                        'src/animate/person-start.js',
                        'src/animate/person-end.js',
                        'src/utils/observer.js'
                    ]
                }
            }
        },
        // 压缩 css
        cssmin: {
            'add_banner': {
                options: {
                    keepSpecialComments: 0 // removing all
                },
                files: {
                    'dist/running-game.css': [
                        'public/css/running-game.css'
                    ]
                }
            }
        },
        express: {
            options: {
                port: 4000
            },
            dev: {
                options: {
                    script: 'dev/server.js'
                }
            }
        },
        watch: {
            express: {
                files: [
                    'dev/server.js'
                ],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            },
            example: {
                files: [
                    'dev/index.html',
                    'dev/index.css',
                    'dev/example/*',
                ],
                options: {
                    livereload: true
                }
            },
            running: {
                files: [
                    'src/**/*'
                ],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        },
        copy: {
            js: {
                src: 'dist/running-game.js',
                dest: 'release/running-game-' + version + '.js'
            },
            css: {
                src: 'dist/running-game.css',
                dest: 'release/running-game-' + version + '.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'express:dev', 'watch']);
    grunt.registerTask('release', ['copy']);
};