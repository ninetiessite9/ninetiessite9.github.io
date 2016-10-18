module.exports = function(grunt) {
grunt.initConfig({
    uncss: {
        dist: {
            files: {
                'css/style.css': ['index.html', 'plan.html', 'about.html', 'team.html', 'specs.html']
            }
        }
    }
});

grunt.loadNpmTasks('grunt-uncss');
//grunt.registerTask('default', 'uncss');
grunt.registerTask('default', ['uncss']);
};
