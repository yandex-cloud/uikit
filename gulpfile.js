/* eslint-env node */
const path = require('path');
const {task, src, dest, series, parallel} = require('gulp');
const rimraf = require('rimraf');
const ts = require('gulp-typescript');
const replace = require('gulp-replace');
const sass = require('gulp-dart-sass');

const BUILD_DIR = path.resolve('build');

task('clean', (done) => {
    rimraf.sync(BUILD_DIR);
    rimraf.sync('styles/**/*.css');
    done();
});

function compileTs(modules = false) {
    const tsProject = ts.createProject('tsconfig.json', {
        declaration: true,
        module: modules ? 'esnext' : 'commonjs',
    });

    return src(['src/components/**/*.{ts,tsx}', '!src/components/**/__stories__/**/*.{ts,tsx}'])
        .pipe(
            replace(/import '.+\.scss';/g, (match) =>
                modules ? match.replace('.scss', '.css') : '',
            ),
        )
        .pipe(tsProject())
        .pipe(dest(path.resolve(BUILD_DIR, modules ? 'esm' : 'cjs', 'components')));
}

task('compile-to-esm', () => {
    return compileTs(true);
});

task('compile-to-cjs', () => {
    return compileTs();
});

task('styles-global', () => {
    return src('styles/styles.scss').pipe(sass().on('error', sass.logError)).pipe(dest('styles'));
});

task('styles-components', () => {
    return src(['src/components/**/*.scss', '!src/components/**/__stories__/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(path.resolve(BUILD_DIR, 'esm', 'components')))
        .pipe(dest(path.resolve(BUILD_DIR, 'cjs', 'components')));
});

task(
    'build',
    series([
        'clean',
        parallel(['compile-to-esm', 'compile-to-cjs']),
        parallel(['styles-global', 'styles-components']),
    ]),
);

task('default', series(['build']));
