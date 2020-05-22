module.exports = function (grunt) {
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'dist/css/master.css' : 'src/sass/master.sass'
                }
            }
        },
        cssmin: {
			minify: {
				src: 'dist/css/master.css',
				dest: 'dist/css/master.css.min'
			}
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-react']
            },
            dist: {
                files: {
                'dist/<%= pkg.name %>.js' : 'src/**/*.js'
                }
            }
        },
        watch: {
            configFiles: {
                files: 'Gruntfile.js',
                options: {
                    reload: true
                }
            },
            scripts: {
                files: "src/**/*.js",
			    tasks: "babel"
            },
            css: {
                files: 'src/sass/*.scss',
                tasks: ['sass', 'cssmin']
            }
        },
        
    });
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.registerTask("default", ["watch", "sass", "concat", "cssmin"]);
};