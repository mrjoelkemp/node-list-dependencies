#!/usr/bin/env node

'use strict';

var precinct = require('precinct'),
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

    printFilename(filename);

    cb(content);
    next();
  });
}

function printFilename(filename) {
  console.log('\n---\n', filename, '\n---');
}

function printDependencies(fileSrc) {
  var dependencies = precinct(fileSrc);

  dependencies.forEach(function(dependency) {
    console.log(dependency);
  });
}

if (isDirectory(filename)) {
  forAllJSFiles(filename, printDependencies);

} else {
  var fileContents = fs.readFileSync(filename, 'utf8');

  printFilename(filename);
  printDependencies(fileContents);
}
