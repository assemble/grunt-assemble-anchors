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

## Before

```html
<h1 id="glyphicons">Glyphicons</h1>
```
## After

```html
<h1 class="docs-heading">
  <a href="#heading-id-name" name="heading-id-name" class="anchor">
    <span class="anchor-target" id="heading-id-name"></span>
    <span class="glyphicon glyphicon-link"></span>
  </a>
  Glyphicons
</h1>
```
Currently the plugin adds [Bootstrap](http://getbootstrap.com/components/#glyphicons) glyphicon classes. If you want to use different classes, find a bug, or have a feature request, [plesae create an issue](https://github.com/assemble/assemble-contrib-anchors/issues/new)

## Example

[![image](https://f.cloud.github.com/assets/383994/1511486/c2414c4e-4aaf-11e3-9c16-30f2993ae2d7.png)](http://assemble.github.io/example-assemble-anchors/components.html#glyphicons)

Visit the [anchors example repo](https://github.com/assemble/example-assemble-anchors).
