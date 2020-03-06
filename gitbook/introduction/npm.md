# npm
[npm](http://npmjs.com) is the package manager for Node.js (a JavaScript runtime environment) and the world’s largest software registry (more than 600k packages)
with approximately 3 billion downloads per week.

<img src="../images/npm-logo.png" alt="" style="width: 200px;"/>

You can use npm to:

* Adapt packages to your apps, or incorporate them as they are.

* Download standalone tools you can use right away.

* Run packages without downloading using npx.

* Share code with any npm user, anywhere.

* Restrict code to specific developers.

* Form virtual teams (orgs).

* Manage multiple versions of code and code dependencies.

* Update applications easily when underlying code is updated.

* Discover multiple ways to solve the same puzzle.

* Find other developers who are working on similar problems.

### package.json

The command `npm init` in your project folder opens an interactive dialogue to establish a npm project.
The result is the `package.json` including all important settings, scripts and dependencies of your project.

```
{
  "name": "name_of_your_package",
  "version": "1.0.0",
  "description": "This is just a test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "http://github.com/yourname/name_of_your_package.git"
  },
  "author": "your_name",
  "license": "ISC"
}
```

Please check the [npm docs](https://docs.npmjs.com/) for further information.

### Install packages with npm

The most common way to install new packages with npm is via the [CLI](https://docs.npmjs.com/cli/npm).
To install a package simply type:

`npm install packagename`

You find the installed packages in the `node_modules` subfolder.

# Node version manager NVM
* bash script to manage multiple active node.js versions
* See [here](https://github.com/creationix/nvm)

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm i v8
```
