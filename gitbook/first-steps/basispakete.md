# Include react-geo dependency

`react-geo` is published at [https://www.npmjs.com/package/@terrestris/react-geo](https://www.npmjs.com/package/@terrestris/react-geo) and
can be integrated and installed in your *React* application via
basic `npm` commands.

## Add react-geo dependency

To add the dependency `react-geo` please navigate to your project's folder
(if not already done) and execute:

```
npm i @terrestris/react-geo
```

This will add the latest version of `react-geo` to your local `package.json` file
(into the `dependencies` section) and download the distributed version of the
library to the `node_modules` directory.

## Add Ant Design und OpenLayers dependencies

You may have noticed that the step from above has produced some warnings, which
include `react-geo`:

<pre><xmp>npm WARN @terrestris/react-geo@{{ book.reactGeoVersion }} requires a peer of antd@~3.0 but none is installed. You must install peer dependencies yourself.
npm WARN @terrestris/react-geo@{{ book.reactGeoVersion }} requires a peer of ol@~5.0 but none is installed. You must install peer dependencies yourself.
</xmp></pre>

`npm` has three different types of dependencies:

#### `dependencies`

[dependencies](https://docs.npmjs.com/files/package.json#dependencies) are
used to directly specify packages needed to *run* your application's code (e.g. a front-end
library like [Bootstrap](https://getbootstrap.com/))
#### `devDependecies`

[devDependencies](https://docs.npmjs.com/files/package.json#devdependencies)
are reserved to specify packages needed to *build* your application's code (e.g.
test harnesses like [Jest](https://facebook.github.io/jest/) or transpilers like
[Babel](https://babeljs.io/)).
#### `peerDependencies`

However, under some conditions, one wants to express
the *compatibility* of a certain package with the host package and npm calls this
dependency a [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies).
Ususally this is used to express the dependency of a plugin inside this host package
or similiar. In `react-geo` we need to have `antd`, `ol` and `react` defined as peer
dependencies due to scope issues, because all of them were usually referenced by
the host package/the application itself in a certain version.

As `npm` handles dependencies hierachically, including those packages in `react-geo` twice would
lead to two different dependencies available in your application at runtime. To
share the dependencies between your host application and `react-geo`, we advice
`react-geo` to use the dependencies given by the host package.

To meet these requirements we have to install the requested peer dependencies by
ourselves with:

```
npm i antd ol
```

Now we're ready to make use of all `react-geo` components and utilities inside
our *{{ book.reactAppName }}* application.
