<center><img src="images/geo-styler-logo.jpg" style="width:650px;"/></center>

# Workshop *{{ book.workshopName }}*

Welcome to the workshop **{{ book.workshopName }}**. This workshop is designed to give you a comprehensive overview of [GeoStyler](https://github.com/geostyler/geostyler) as a library of geo-related application components available in combination with [React](https://github.com/facebook/react), [Ant Design](https://github.com/ant-design/ant-design) and [OpenLayers](https://github.com/openlayers/openlayers).

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

* [Grundlagen](./introduction/README.md) - Dive into the basics of EcmaScript 6, React and npm.
* [Erste Schritte](first-steps/index.md) - Learn how to create your own React app and how to include react-geo in it.
* [Geostyler](geostyler/index.md) - Extend your application with some react-geo components.

## Authors

{% for author in book.authors %}
  - {{ author.name }} ([{{ author.mail }}](mailto:{{ author.mail }}))
{% endfor %}
