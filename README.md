# assemble-plugin-anchors [![NPM version](https://badge.fury.io/js/assemble-plugin-anchors.png)](http://badge.fury.io/js/assemble-plugin-anchors)

> Assemble plugin for creating anchor tags from headings in generated html using Cheerio.js.

## Example
### Before

```html
<h1 id="glyphicons">Glyphicons</h1>
```
### After

```html
<h1 class="docs-heading">
  <a href="#heading-id-name" name="heading-id-name" class="anchor">
    <span class="anchor-target" id="heading-id-name"></span>
    <span class="glyphicon glyphicon-link"></span>
  </a>
  Glyphicons
</h1>
```
Currently the plugin adds [Bootstrap](http://getbootstrap.com/components/#glyphicons) glyphicon classes. If you want to use different classes, find a bug, or have a feature request, [please create an issue](https://github.com/assemble/assemble-contrib-anchors/issues/new)

[![image](https://f.cloud.github.com/assets/383994/1511486/c2414c4e-4aaf-11e3-9c16-30f2993ae2d7.png)](http://assemble.github.io/example-assemble-anchors/components.html#glyphicons)

Visit the [anchors example repo](https://github.com/assemble/example-assemble-anchors).

## Quickstart
In the command line, run:

```bash
npm install assemble-plugin-anchors --save
```

Next, register the plugin with Assemble:

```js
var options = {
  plugins: ['assemble-plugin-anchors', 'other/plugins/*']
};
```

## Options
#### template

Specify a custom template (Underscore/Lo-Dash) to use for anchor markup. This is the default template:

```js
module.exports = [
  '<a href="#<%= id %>" name="<%= id %>" class="anchor">',
  '  <span class="anchor-target" id="<%= id %>"></span>',
  '  <span class="glyphicon glyphicon-link"></span>',
  '</a>'
].join('\n');
```

To use a custom template just specify it in the options as follows:

```js
assemble: {
  foo: {
    options: {
      plugins: ['assemble-plugin-anchors'],
      anchors: {
        template: './path/to/custom/template.js'
      }
    },
    files: {'dist/': 'content/*.md'}
  }
}
```


Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.

### [grunt-assemble](https://github.com/assemble/grunt-assemble) configuration

You can also use the plugin with specific targets:

```js
assemble: {
  foo: {
    options: {
      plugins: ['assemble-plugin-anchors'],
      layout: 'blog-post.hbs'
    },
    files: {'dist/': 'content/*.md'}
  },
  // The plugin won't run on this target
  bar: {
    files: {'dist/': 'templates/*.hbs'}
  }
}
```

To disable the plugin, either remove it from the options or specify `anchors: {convert: false}` in the options.

## Other Assemble plugins
Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.

+ [assemble-plugin-blog](https://api.github.com/repos/assemble/assemble-plugin-blog): Assemble plugin for generating blog pages for posts and archive list pages. 
+ [assemble-plugin-drafts](https://api.github.com/repos/assemble/assemble-plugin-drafts): Assemble plugin (v0.5.0) for preventing drafts from being rendered. 
+ [assemble-plugin-pagination](https://api.github.com/repos/assemble/assemble-plugin-pagination): WIP this plugin isn't ready for use! 
+ [assemble-plugin-rss](https://api.github.com/repos/assemble/assemble-plugin-rss): NOT Published yet! This plugin isn't ready for prime time! Plugin for creating RSS feeds with Assemble, the static site generator for Node.js, Grunt.js and Yeoman.  
+ [generator-plugin](https://api.github.com/repos/assemble/generator-plugin): Yeoman generator for Assemble plugins.  
+ [grunt-init-assemble-plugin](https://api.github.com/repos/assemble/grunt-init-assemble-plugin): Generate a plugin for Assemble. 
+ [plugins](https://api.github.com/repos/assemble/plugins): Collection of contrib plugins maintained by the Assemble core team. 
+ [assemble-contrib-lunr-examples](https://api.github.com/repos/assemble/assemble-contrib-lunr-examples): Usages examples for assemble-contrib-lunr, a search plugin for Assemble. 
+ [assemble-contrib-markdown](https://api.github.com/repos/assemble/assemble-contrib-markdown): HEADS UP! This isn't ready for prime time! Convert markdown files to HTML using marked.js. This plugin is an alternative to Assemble's markdown Handlebars helpers. Both are useful in different scenarios. 
+ [assemble-contrib-navigation](https://api.github.com/repos/assemble/assemble-contrib-navigation): Assemble plugin for automatically generating Bootstrap-style side navigation.  
+ [assemble-contrib-permalinks](https://api.github.com/repos/assemble/assemble-contrib-permalinks): Permalinks plugin for Assemble, the static site generator for Grunt.js and Yeoman. This plugin enables powerful and configurable URI replacement patterns, presets, uses Moment.js for parsing dates, and much more. 
+ [assemble-contrib-sitemap](https://api.github.com/repos/assemble/assemble-contrib-sitemap): Sitemap generator plugin for Assemble 
+ [assemble-contrib-toc](https://api.github.com/repos/assemble/assemble-contrib-toc): Create a table of contents in the generated HTML, using Cheerio.js 
+ [assemble-contrib-toc-example](https://api.github.com/repos/assemble/assemble-contrib-toc-example): Example for generating a Table of Contents using Assemble. 
+ [assemble-contrib-wordcount](https://api.github.com/repos/assemble/assemble-contrib-wordcount): Assemble plugin for displaying a word-count on blog posts or pages. 

Visit [assemble.io/plugins](http:/assemble.io/plugins/) for more information about [Assemble](http:/assemble.io/) plugins.


## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/assemble/assemble-plugin-anchors/issues).

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality,
and run `docs` in the command line to build the docs with [Verb](https://github.com/assemble/verb).

Pull requests are also encouraged, and if you find this project useful please consider "starring" it to show your support! Thanks!

## Author

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2014 Brian Woodward, contributors.  
Released under the MIT license

***

_This file was generated by [grunt-verb](https://github.com/assemble/grunt-verb) on April 29, 2014._
