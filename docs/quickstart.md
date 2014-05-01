In the command line, run:

```bash
npm install {%= name %} --save
```

Next, register the plugin with Assemble:

```js
var options = {
  plugins: ['{%= name %}', 'other/plugins/*']
};
```