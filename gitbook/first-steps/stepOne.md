# MapComponent einbinden 

Nachdem wir die für diesen Workshop notwendigen Dependencies installiert haben, können wir deren Komponenten in der
_{{ book.reactAppName }}_ Anwendung nutzen. Als nächstes werden wir react-geos
[Map Komponente](https://terrestris.github.io/react-geo/docs/latest/index.html#mapcomponent)
mit der Hintergrundkarte der Anwendung hinzufügen.
<br>

> **info**
> Falls Sie mehr über react-geo herausfinden möchten, dann können Sie [hier](https://terrestris.github.io/react-geo-ws/)
> an dem react-geo-Workshop teilnehmen.

Bevor React, sowie OpenLayers und react-geo verwendet werden können, müssen diese zu Beginn der Anwendung aus der jeweiligen Bibliothek importiert werden.
Dies geschieht beispielsweise durch:

```javascript
import OlMap from "ol/Map";
import { MapComponent } from "@terrestris/react-geo";

const map = new OlMap({
  view: new OlView({
    center: center,
    zoom: 2,
    projection: "EPSG:3857"
  }),
  layers: [base],
  interactions: [new DragPan()]
});
```
Darüber hinaus muss hier eine `map` Variable erstellt werden, welche grundlegende Einstellungen der Karteninstanz beinhaltet, wie z.B. das Zoomlevel, die Projektion oder auch die Layer.

Die react-geo Komponente (`MapComponent`) dient als Wrapper für eine OpenLayers map. Die
`OlMap` Variable `map` wird der `MapComponent` als eine Property
(prop) hinzugefügt.

```javascript
<MapComponent map={map} />
```

Die Hintergrundkarte (im Code mit der Variable `base` genannt) ist ein OpenLayers Layer und wird durch den Befehl
`import { getBaseLayer} from './helper';` der App.js Datei zugänglich gemacht.

> **info**
> Der Übersicht halber wurde diese Datei von `App.js` nach `helper.js` ausgelagert.

***Aufgabe 1.***
Öffnen Sie einen Texteditor Ihrer Wahl (falls noch nicht geschehen) und öffnen Sie die Datei `App.js`
von dem `src` Ordner Ihrer _{{ book.reactAppName }}_ Anwendung. Erstellen Sie nun eine `map`- Variable und fügen Sie diese mit dem `base`- Layer der Applikation hinzu.

Folgendermaßen wird die Karte bei erfolgreicher Bearbeitung der Aufgabe (und Speichern der Änderungen) im Browser angezeigt:

[![](../images/stepOneImage.png)](../images/stepOneImage.png)

Der Code Ihrer Lösung könnte wie folgt aussehen:
```javascript
import React from "react";

import OlMap from "ol/Map";
import OlView from "ol/View";
import DragPan from "ol/interaction/DragPan";

import "./App.css";
import "ol/ol.css";
import "antd/dist/antd.css";
import "./Workshop.css";
import { getBaseLayer } from "./helper";

import { MapComponent } from "@terrestris/react-geo";

var base = getBaseLayer();

const center = [0, 8000000];

const map = new OlMap({
  view: new OlView({
    center: center,
    zoom: 2,
    projection: "EPSG:3857"
  }),
  layers: [base],
  interactions: [new DragPan()]
});

function App() {
  return (
    <div className='App'>
      <MapComponent map={map} />
    </div>
  );
}

export default App;
```

Im nächsten Unterkapitel werden wir der Anwendung drei Boxen hinzufügen, welche den Style des 
Layers (s. Kapitel 2.7), abhängig von der aktuell im Viewport zu sehenden Box verändert.