/*
 * assemble-contrib-anchors
 * Copyright (c) 2013 Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

var options = {
  stage: 'render:post:page'
};

var cheerio = require('cheerio');

/**
 * Anchor Plugin
 * @param  {Object}   params
 * @param  {Function} callback
 */
module.exports = function(params, callback) {
  'use strict';

  var content = params.content;

  var opts = params.assemble.options;
  opts.anchors = opts.anchors || {};

  // load current page content
  var $ = cheerio.load(content);

  // get all the h tags with an id
  var headings = $('h1[id],h2[id],h3[id],h4[id]');
  headings.map(function(i, e) {
    if(e.attribs.id) {
      var anchor = [
        '<a href="#' + e.attribs.id + '" name="' + e.attribs.id + '" class="anchor">',
        '  <span class="anchor-target" id="' + e.attribs.id + '"></span>',
        '  <span class="glyphicon glyphicon-link"></span>',
        '</a>\n'
      ].join('\n');
      $(this).append(anchor);
      $(this).removeAttr('id').addClass('docs-heading');
    }
  });

  params.content = $.html();
  callback();
};

module.exports.options = options;