'use strict';

var elixir = require('laravel-elixir');

// Elixir Configurations
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

var bowerPath = './bower_components';

elixir(function(mix) {

  // Sample Vendor File
  mix.copy(`${bowerPath}/jquery/dist/jquery.min.js`, 'src/js/vendor/jquery.js');
  mix.copy(`${bowerPath}/bxslider-4/dist/jquery.bxslider.min.js`, 'src/js/vendor/bxslider-4.js');

  mix.scripts([
    'vendor/jquery.js',
    'vendor/bxslider-4.js',
    'rop-ui-kit.js'
  ],'dist/js/rop-ui-kit.js');

  mix.sass('rop-ui-kit.scss');
});
