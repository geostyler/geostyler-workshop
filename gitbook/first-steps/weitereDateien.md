# Weitere Dateien

Bevor Sie im Folgenden Kapitel eine interaktive Kartenanwendung erstellen, müssen zunächst
weitere Dateien im _{{ book.reactAppName }}_ Ordner erstellt werden.

**Aufgabe 1.**

Erstellen Sie bitte zunächst folgende Dateien im _{{ book.reactAppName }}_ Ordner (achten Sie hierbei dringend auf die Endungen):
- Attributions.js
- helper.js
- viewportHelper.js
- Workshop.css

> **info**
> Da dieser Workshop den GeoStyler thematisiert, ist es nicht zwingend relevant  
> den Aufbau und Inhalt des Ordners und der sich dort vorhandenen Skripte zu kennen.
> Hauptsächlich ist die `App.js` für diesen Workshop relevant.

**Aufgabe 2.**

Kopieren Sie nun die jeweiligen Code-Blöcke (siehe unten) der entsprechenden Dateien und fügen Sie diese in die von Ihnen erstellte dazugehörige Datei ein.

Attributions.js
```javascript
import React from 'react';

function Attributions() {
    return (
        <div className="attributions">
            <h1>Attributions</h1>
            <ul>
                <li><b>Countries:</b><a href="https://ahocevar.com/geoserver/wfs?service=WFS&version=1.1.0&request=GetCapabilities">Andreas Hocevar & NaturalEarth</a></li>
                <li><b>CoVid-19:</b><a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins University</a></li>
            </ul>
        </div>
    );
}

export default Attributions;

```

helper.js
```javascript
import { Stroke, Fill, Style, Circle } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import GeoJSON from 'ol/format/GeoJSON';

function getBaseLayer() {

    var baseSource = new VectorSource({
        format: new GeoJSON(),
        url: function (extent) {
            return 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
                'version=1.1.0&request=GetFeature&typename=opengeo:countries&' +
                'outputFormat=application/json&srsname=EPSG:3857&' +
                'bbox=' + extent.join(',') + ',EPSG:3857';
        },
        strategy: bboxStrategy
    });

    var base = new VectorLayer({
        source: baseSource,
        style: getDefaultStyle(),
        projection: 'EPSG:3857'
    });

    return base;
}

function getCovidLayer(covidDeath) {
    var deathSource = new VectorSource({
        features: (new GeoJSON()).readFeatures(covidDeath, {
            featureProjection: 'EPSG:3857'
        })
    });

    var vector = new VectorLayer({
        source: deathSource,
        style: getDefaultStyle(),
        projection: 'EPSG:4326'
    });

    return vector;
}

function getDefaultStyle() {
    const defaultOlStyle = new Style({
        stroke: new Stroke({
            color: 'rgba(255, 255, 255, 1.0)',
            width: 1
        }),
        fill: new Fill({
            color: 'rgba(0, 0, 0, 1)'
        }),
        image: new Circle({
            fill: new Fill({
                color: 'rgba(255, 0, 0, 1.0)'
            }),
            radius: 5
        })
    });
    return defaultOlStyle;
}

export {
    getBaseLayer,
    getCovidLayer,
    getDefaultStyle
};
```

viewportHelper.js
```javascript
function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

    return (
        (rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.bottom >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

export default isElementInViewport;
```

workshop.css
```css
html, body, #root, .App, #map {
    margin: 0;
    padding: 0;
    height: calc(100vh + (3 * 30vh) + (2 * 130vh) - 30vh);
}

.App {
    background-color: black;
}

#map {
    position: fixed;
    height: 100vh;
    width: 100vw;
}

.ws-toggle-editor-btn {
    position: fixed;
    z-index: 9999;
}

.ws-overlay {
    position: relative;
    border: 2px solid #f2f51e;
    border-radius: 5px;
    width: 30vw;
    height: 30vh;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.25);
}

.ws-overlay, .ws-overlay > h1 {
    color: white;
}

#ws-overlay-1 {
    display: inline-block;
    margin-left: 5vw;
    margin-bottom: calc(130vh);
    border-color: #f2f51e;
}

#ws-overlay-2 {
    margin-left: calc(100vw - 30vw - 5vw);
    margin-bottom: calc(130vh);
    border-color: #52c41a;
}

#ws-overlay-3 {
    margin-left: 5vw;
    margin-bottom: calc(100vh - 30vh);
    border-color: #4464ff;
}

.filter-editor-window, .rule-generator-window, .symbolizer-editor-window {
    z-index: 1000 !important;
    position: fixed !important;
    left: 60vw !important;
    top: 20vh !important;
    transform: none !important;
}

.attributions {
    position: relative;
}

.ant-drawer-content-wrapper {
    height: 400px !important;
}

```