### template

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
      plugins: ['{%= name %}'],
      anchors: {
        template: './path/to/custom/template.js'
      }
    },
    files: {'dist/': 'content/*.md'}
  }
}
```


Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.

## [grunt-assemble](https://github.com/assemble/grunt-assemble) configuration

You can also use the plugin with specific targets:

```js
assemble: {
  foo: {
    options: {
      plugins: ['{%= name %}'],
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