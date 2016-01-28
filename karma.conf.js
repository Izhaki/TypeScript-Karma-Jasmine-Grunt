module.exports = function(config) {
    config.set({
        // Note that we also use `requirejs`
        frameworks: [ 'jasmine', 'requirejs' ],

        files: [
            // We add all transpiled files (specs and unit) with included set
            // to false.
            { pattern: 'transpiled/**/*.js', included: false },

            // Test main will search the files for specs and load them
            // dynamically.
            'test-main.js'
        ],

        reporters: [ 'progress' ],

        browsers: [ 'PhantomJS' ],

        autoWatch: false,
        singleRun: true
  })
}
