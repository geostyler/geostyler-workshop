<center><img src="images/react-geo-logo.svg" style="width: 250px;"/></center>

# Workshop *{{ book.workshopName }}*

Welcome to the workshop **{{ book.workshopName }}**. This workshop is designed to give you a comprehensive overview of [react-geo](https://github.com/terrestris/react-geo) as a library of geo-related application components available in combination with [React](https://github.com/facebook/react), [Ant Design](https://github.com/ant-design/ant-design) and [OpenLayers](https://github.com/openlayers/openlayers).

> **info**
> If you want to visit this page on your own device or to print the PDF version,
> you can download the workshop materials [here]({{ book.workshopDownloadUrl }}).

## Setup

The following instructions and exercises assume that you have some requirements fulfilled on your local machine. Please check if you have the consequent packages installed:
  * A suitable text editor, e.g. the lightweight [Atom](https://atom.io/) editor.
  * [NodeJS](https://nodejs.org/en/) in version 10 or higher.

All set? Then, lets' go!

## Overview

This workshop is presented as a set of modules. In each module you will perform
tasks designed to achieve a specific goal for that module. Each module builds upon
lessons learned in previous modules and is designed to iteratively build up your
knowledge base.

* [Basics](./introduction/README.md) - Dive into the basics of EcmaScript 6, React and npm.
* [First steps](first-steps/index.md) - Learn how to create your own React app and how to include react-geo in it.
* [react-geo components](map-integration/index.md) - Extend your application with some react-geo components.
* [Higher order components / Provider](higher-order-components/general.md) - Have a look at more advanced components.

## Authors

{% for author in book.authors %}
  - {{ author.name }} ([{{ author.mail }}](mailto:{{ author.mail }}))
{% endfor %}
