module.exports = function(grunt) {
    grunt.registerTask('default', ['build']);
    grunt.registerTask('dev', ['build', 'concurrent']);

    grunt.registerTask('build', ['clean', 'copy', 'styles', 'scripts']);

    grunt.registerTask('styles', ['compass', 'autoprefixer']);
    grunt.registerTask('scripts', ['shell:bower', 'jshint', 'concat', 'uglify']);


    grunt.initConfig({
        shell: {
            // install bower packages
            bower: {
                command: 'node_modules/bower/bin/bower install'
            },
            server: {
                command: 'cd build; php -S localhost:3005'
            }
        },

        clean: {
            build: {
                src: ['build']
            }
        },
        
        copy: {
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/img/',
                        src: ['**/*'],
                        dest: 'build/img/'
                    }
                ]
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/fontawesome/fonts/',
                    src: ['*'],
                    dest: 'build/fonts/'
                }]
            },
            php: {
                files: [{
                    expand: true,
                    cwd: 'src/php',
                    src: ['**/*.php'],
                    dest: 'build/'
                }]
            },
            html: {
                files: [{
                    expand: true,
                    cwd: 'src/php/partials',
                    src: ['**/*.html'],
                    dest: 'build/partials'
                }]
            }
        },

        // Styles
        compass: {
            build: {
                options: {
                    sassDir: 'src/scss/',
                    specify: 'src/scss/style.scss',
                    cssDir: 'build/',
                    outputStyle: 'compressed'
                }
            }
        },
        // add vendor-prefix to CSS
        autoprefixer: {
            client: {
                src: 'build/style.css',
                dest: 'build/style.css'
            }
        },

        // Scripts
        jshint: {
            options: {
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                freeze: false,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonbsp: true,
                nonew: true,
                plusplus: false,
                quotmark: 'single',
                undef: true,
                unused: true,
                strict: false,
                maxparams: 4,
                maxdepth: 4,
                maxlen: 120,
                trailing: true,
                globals: {
                    $: false,
                    jQuery: false,
                    google: false,
                    angular: true,
                    config: true
                }
            },
            grunt: {
                options: {
                    node: true
                },
                src: ['Gruntfile.js']
            },
            build: {
                options: {
                    browser: true
                },
                src: [
                    'src/js/**/*.js'
                ]
            }
        },
        concat: {
            build: {
                options: {
                    separator: ';\n'
                },
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',

                    'src/js/shop.js',
                    'src/js/scripts.js',
                    'src/js/app.js'
                ],
                dest: 'build/scripts.js'
            }
        },
        uglify: {
            static: {
                src: 'build/scripts.js',
                dest: 'build/scripts.js'
            }
        },

        concurrent: {
            dev: {
                tasks: ['shell:server', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        // Watch
        watch: {
            css: {
                files: ['src/scss/**/*.scss'],
                tasks: ['styles'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['scripts'],
                options: {
                    livereload: true
                }
            },
            php: {
                files: ['src/php/**/*.php'],
                tasks: ['copy:php'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['src/php/partials/*.html'],
                tasks: ['copy:html'],
                options: {
                    livereload: true
                }
            },
            images: {
                files: ['src/img/**/*'],
                tasks: ['copy:images'],
                options: {
                    livereload: true
                }
            }
        }
    });
    
    // File/Folder handling plugins
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Stylesheet plugins
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Javascript plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Watch plugins
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
};