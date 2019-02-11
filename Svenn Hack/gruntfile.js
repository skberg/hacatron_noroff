module.exports = function(grunt){
    grunt.initConfig({
        pgk: grunt.file.readJSON('package.json'),
        sass:{
            dist:{
                files:{
                    './public/css/styles.css' : './sass/styles.scss'
                }
            }
        },
        watch:{
            css:{
                files:'./sass/partials/*.scss',
                tasks: ['sass' ,'cssmin']
            }
        },

        cssmin:{
            minify:{
                src:'./public/css/styles.css',
                dest:'./public/css/styles.min.css'
            }
        },

        browserSync: {
            dev: {
                bsFiles:{
                src: [
                    './public/css/styles.min.css',
                    './public/*.html'
                ]
            },
            options: {
                watchTask: true,
                server: "./public"
            }
        }
    },
  



    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default',['browserSync','watch']);
};
    


