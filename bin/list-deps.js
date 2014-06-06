#!/usr/bin/env node

'use strict';

var detective = require('detective-amd'),
    filename = process.argv[2],
    dir = require('node-dir'),
    fs = require('fs');

if (! filename) {
  throw new Error('please supply a filename or directory');
}

function isDirectory(filename) {
  return fs.lstatSync(filename).isDirectory();
}

function forAllJSFiles(directory, cb) {
  dir.readFiles(directory,
  {
    match: /.js$/,
    exclude: /^\./,
  },
  function (err, content, filename, next) {
    if (err) throw err;

    console.log('\n---\n', filename, '\n---');

    cb(content);
    next();
  });
}

function printDependencies(fileSrc) {
  var dependencies = detective(fileSrc);

  dependencies.forEach(function(dependency) {
    console.log(dependency);
  });
}

if (isDirectory(filename)) {
  forAllJSFiles(filename, printDependencies);

} else {
  // Print the file and its dependency list
  var fileContents = fs.readFileSync(filename).toString();

  printDependencies(fileContents);
}
