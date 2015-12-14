# Overview Web Templates

This folder contains all configuration and design files of the frontend of the CPIO Web Interface. After compilation or rendering the obtained file can be included by the python web app in the form of templates.

The design is based on the frontend framework [Bootstrap](http://getbootstrap.com/) ([SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) flavored) used for generating minimalistic designs in little time and [jQuery](http://api.jquery.com/), a JavaScript library, used here to include small interactivity to the interface.
The dependencies of the frameworks and libraries are managed with [bower](http://bower.io/), a web packet manager. The whole generation process of the final template files is organized through [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) which directly includes bower.

## Structure
 
 - [src/](src) contains all files (html, sass, js) to be rendered
 - [out/](out) contains the generated files
 - [package.json](package.json) contains all node.js package dependencies
 - [bower.json](bower.json) contains all bower package dependencies such ass Bootstrap or jQuery
 - [gulpfile.js](gulpfile.js) defines the gulp toolchain functions

## Installation

Use the installer script [INSTALL.sh](INSTALL.sh) to install all necessary software for the web frontend toolchain.

## Usage

The following commands are available
 - `gulp` generate the static files
 - `gulp clean` remove all generated files
 - `gulp serve` automatically regenerate files in background and stream output on [localhost:3000](http://localhost:3000)
