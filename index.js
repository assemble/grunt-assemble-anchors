/*
 * assemble-contrib-anchors
 * Copyright (c) 2013 Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

var path = require('path');
var cheerio = require('cheerio');
var template = require('template');


module.exports = function (assemble) {

  /**
   * Anchor Plugin
   * @param  {Object}   params
   * @param  {Function} next
   */
  var plugin = function (params, next) {
    'use strict';

    var opts = assemble.options.anchors || {};

    // load current page content
    var $ = cheerio.load(params.page.content);

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

    params.page.content = $.html();
    next();
  };

  // Define plugin options for Assemble
  plugin.options = {
    name: 'assemble-plugin-anchors',
    events: [
      'page:after:render'
    ]
  };

  var rtn = {};
  rtn[plugin.options.name] = plugin;
  return rtn;
};