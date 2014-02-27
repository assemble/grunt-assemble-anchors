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