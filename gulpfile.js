var gulp = require('gulp');
var to5 = require('gulp-6to5');
var to5ify = require('6to5ify');
var sourcemaps = require("gulp-sourcemaps");
var browserify = require('browserify');
var fs = require('fs');

gulp.task('bundle', ['compile'], function () {
    return browserify({ debug: true })
        .transform(to5ify.configure({
            loose: ["classes"],
            runtime: true
        }))
        .require("./src/app.js", { entry: true })
        .bundle()
        .on("error", function (err) { console.log("Error: " + err.message); })
        .pipe(fs.createWriteStream("./dist/bundle.js"));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['bundle']);
});

gulp.task('default', ['bundle', 'watch']);


// if you want to compile libraries then it's best to have a completely separate task
// trying make this work and have source maps work just didn't work
gulp.task('lib', function () {
    var to5_stream = to5({ format: { indent: {style: "    "} } });

    to5_stream.on("error", function (e) {
        console.log(e.message);
        to5_stream.end();
    });

    return gulp.src(['src/**/*.js','!src/app.js'])
        .pipe(sourcemaps.init())
        .pipe(to5_stream)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('lib'));
});
