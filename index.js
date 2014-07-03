'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIBootstrap(project) {
  this.project = project;
  this.name    = 'Ember CLI Bootstrap';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIBootstrap.prototype.treeFor = function treeFor(name) {
  var treePath = path.join('node_modules/ember-cli-bootstrap', name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIBootstrap.prototype.included = function included(app) {
  var rootPath = 'vendor/bootstrap/dist/';

  app.import(rootPath + 'js/bootstrap.js');
  app.import(rootPath + 'css/bootstrap-theme.css');
  app.import(rootPath + 'css/bootstrap.css');
  app.import(rootPath + 'fonts/glyphicons-halflings-regular.woff');
  app.import(rootPath + 'fonts/glyphicons-halflings-regular.eot');
  app.import(rootPath + 'fonts/glyphicons-halflings-regular.svg');
  app.import(rootPath + 'fonts/glyphicons-halflings-regular.ttf');
};

module.exports = EmberCLIBootstrap;
