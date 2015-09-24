/*
 * assemble-contrib-anchors
 * Copyright (c) 2013 Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

var options = {
  stage: 'render:post:page'
};

var path = require('path');
var cheerio = require('cheerio');
var template = require('template');

/**
 * Anchor Plugin
 * @param  {Object}   params
 * @param  {Function} callback
 */
module.exports = function(params, callback) {
  'use strict';

  var opts = params.assemble.options.anchors || {};

  // load current page content
  var $ = cheerio.load(params.content);

  var tmpl = require('./lib/template.js');

  // If a template is specified in the options, use that instead.
  if(opts && opts.template) {
    opts.template = path.resolve(opts.template);
    tmpl = require(opts.template);
  }

  // get all the h tags with an id
  var headings = $('h1[id],h2[id],h3[id],h4[id]');
  headings.map(function(i, e) {
    if(e.attribs.id) {
      var anchor = template(tmpl, {id: e.attribs.id});

      $(this).append(anchor);
      $(this).removeAttr('id').addClass('docs-heading');
    }
  });

  params.content = $.html();
  callback();
};

module.exports.options = options;
