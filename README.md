# assemble-contrib-anchors [![NPM version](https://badge.fury.io/js/assemble-contrib-anchors.png)](http://badge.fury.io/js/assemble-contrib-anchors)

> Assemble plugin for creating anchor tags from headings in generated html using Cheerio.js.

## Before

```html
<h1 id="glyphicons">Glyphicons</h1>
```

## After

```html
<h1 id="glyphicons">Glyphicons
  <a name="glyphicons" class="anchor" href="#glyphicons">
    <span class="glyphicon glyphicon-link"></span>
  </a>
</h1>
```

Currently the plugin adds [Bootstrap](http://getbootstrap.com/components/#glyphicons) glyphicon classes. If you want to use different classes, find a bug, or have a feature request, [plesae create an issue](https://github.com/assemble/assemble-contrib-anchors/issues/new)


## Example

[![image](https://f.cloud.github.com/assets/383994/1511486/c2414c4e-4aaf-11e3-9c16-30f2993ae2d7.png)](http://assemble.github.io/example-assemble-anchors/components.html#glyphicons)


Visit the [anchors example repo](https://github.com/assemble/example-assemble-anchors).


## Quick start

The following quick start options are available:

* `npm install assemble-contrib-anchors --save`.
* Install with [Bower](http://bower.io): `bower install assemble-contrib-anchors`.
* Clone the repo: `git clone https://github.com/assemble/assemble-contrib-anchors.git`.
* [Download the latest release](https://github.com/assemble/assemble-contrib-anchors/archive/master.zip).


## Contributing

Please read through the [contributing guidelines](CONTRIBUTING.md). In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

Editor preferences are available in the [editor config](.editorconfig) for easy use in common text editors. Read more and download plugins at [http://editorconfig.org](http://editorconfig.org).

## Release History

 * 2013   v0.1.0   First commit

## License
Copyright (c) 2013 Brian Woodward
Licensed under the [MIT license](LICENSE-MIT).


***

Project created by [Brian Woodward](https://github.com/doowb).

_This file was generated on Sun Nov 10 2013 22:27:53._
