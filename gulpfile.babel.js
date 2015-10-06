import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import del from 'del';
import RunSequnence from 'run-sequence';

const $ = gulpLoadPlugins();
let options = {};
var assetPath = './dist';

gulp.task('clean', (cb) => {
  del([assetPath], cb);
});

// run webpack bundler
gulp.task('bundle', (cb) => {
  const config = require(`./webpack.${options.dist ? 'dist.' : ''}config`);
  const bundler = webpack(config);

  function bundlerCallback(err, stats) {
    console.log(stats.toString());
  }
  if (options.watch) {
    bundler.watch(200, bundlerCallback);
  } else {
    bundler.run(bundlerCallback);
  }
});

gulp.task('bundle:dist', (cb) => {
  options.dist = true;
  RunSequnence('bundle', cb);
});

gulp.task('build', ['clean'], (cb) => {
  RunSequnence(['bundle'], cb)
});

gulp.task('moveOtherfiles', (cb) => {
  gulp.src(['src/index.html'])
    .pipe(gulp.dest(assetPath));
});


gulp.task('build:dist', (cb) => {
  options.dist = true;
  RunSequnence(['clean', 'bundle', 'moveOtherfiles'], cb);
});

gulp.task('serve', () => {
  const config = require('./webpack.config');
  const bundler = webpack(config);
  let server = new WebpackDevServer(bundler, {
    contentBase: './src',
    publicPath: '/assets/',
    hot: true,
    stats: {
      colors: true
    }
  });
  server.listen(9998, 'localhost', (err) => {
    console.log('server started @ 9998');
  });
});
