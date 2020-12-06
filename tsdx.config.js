/* eslint-disable no-param-reassign */
const scss = require('rollup-plugin-scss');
const copy = require('rollup-plugin-copy');
const path = require('path');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      scss(),
      copy({
        targets: [
          {
            src: [path.join(__dirname, 'src/fonts/Rubik400.ttf')],
            dest: path.join(__dirname, 'dist/fonts'),
          },
        ],
      })
    );
    return config;
  },
};
