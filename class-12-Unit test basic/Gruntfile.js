module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //jshint: {
        //    options: {
        //        jshintrc: '.jshintrc'
        //    },
        //    all: [
        //        'Gruntfile.js',
        //        'app/*.js'
        //    ]
        //},
        karma: {
            unit: {
                configFile: 'karma-config.js',
                singleRun: false
            }
        }
    });
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
};