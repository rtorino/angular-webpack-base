Webpack + Angular + Bower + Gulp
================================

*This template is kept bare-bones on purpose. If you have any questions or need advice on folder structure feel free to make an issue*

Minimal boilerplate with webpack (run from gulp) that supports angular (from bower), with some common settings.

It uses https://github.com/segmentio/khaos to generate the template.

```
npm install -g khaos
khaos create rtorino/angular-webpack-base <your project name>
```

What it has

* webpack configured with the bower path included `bower_components/<module name>`
* angular. Globally loaded
* karma. looks for .spec.js files.

Optional stuff:

* facebook/flo for live reloading in the browser.
* SASS loader