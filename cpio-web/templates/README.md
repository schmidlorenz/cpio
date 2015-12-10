# Overview Web Templates

This folder contains all configuration and design files of the frontend of the CPIO Web Interface. After compilation or rendering the obtained file can be included by the python web app in the form of templates.

The design is based on the frontend framework [Bootstrap](http://getbootstrap.com/) ([SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) flavored) used for generating minimalistic designs in little time and [jQuery](http://api.jquery.com/), a JavaScript library, used here to include small interactivity to the interface.
The dependencies of the frameworks and libraries are managed with [bower](http://bower.io/), a web packet manager. The whole generation process of the final template files is organized through [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) which directly includes bower.

## Generation
Install Node.js and set up gulp with all its dependencies (see [package.json](package.json)). Important: Use gulp-ruby-sass@0.7.1 as newer versions fail to compile correctly under current ruby version.
Run `gulp` to compile.