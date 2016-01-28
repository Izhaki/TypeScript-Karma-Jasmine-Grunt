module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            typescript: {
                // Watching all typescript files (specs and units)
                files: [ 'source/**/*.ts' ],
                // First transpile, then run tests
                tasks: [ 'ts:default', 'karma:continuous:run' ],
                options: {
                    spawn: false
                }
            }
        },

        ts: {
            default: {
                src: [
                    // Note that we add the typings for jasmine here
                    'typings/jasmine.d.ts',
                    // We compile all .ts files (specs and units)
                    'source/**/*.ts'
                ],
                options: {
                    // We need to convert ES6 to ES5 and use amd so it works
                    // with RequireJS
                    module: 'amd',
                    fast: 'never'
                },
                // We output all files to a temp folder
                outDir: 'transpiled'
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js'
            },

            continuous: {
                logLevel:  'INFO',
                singleRun: false,
            }
        }

    });

    require('load-grunt-tasks')(grunt);
};
