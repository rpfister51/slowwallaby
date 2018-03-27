module.exports = function (wallaby) {
    return {
      files: [
        'src/**/*.js'
      ],
  
      tests: [
        'tests/**/*Spec.js'
      ],

      env: {
          type: 'node',
          runner: 'node'
      },

      workers: {
        initial: 6,
        regular: 2,
        restart: true
      },

      testFramework: 'jest',
      debug: true
    };
  };