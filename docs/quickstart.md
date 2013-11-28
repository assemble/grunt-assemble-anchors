In the command line, run:

```bash
npm install {%= name %} --save
```

Next, register the plugin with Assemble in your project's Gruntfile:

```js
assemble: {
  options: {
    plugins: ['{%= name %}', 'other/plugins/*']
  }
}
```

## Configuration

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

To disable the plugin, either remove it from the options or specify `{%= shortname %}: {convert: false}` in the options:

```js
assemble: {
  foo: {
    options: {
      plugins: ['{%= name %}'],
      {%= shortname %}: {convert: false}
    },
    files: {'dist/': 'content/*.md'}
  }
}
```
Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.