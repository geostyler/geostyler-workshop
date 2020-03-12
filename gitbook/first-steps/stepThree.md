# CoVid-Layer hinzufügen

In diesem Unterkapitel werden wir der `map` Variable einen weiteren Layer zuweisen (neben dem bereits im Kapitel 2.5 hinzugefügten base-Layer).
<br><br>
Dafür wird der covidDeath Datensatz zunächst importiert (1), der `vector` Variable zugewiesen
und in der `map` Variable referenziert (2).

(1)

```javascript
import covidDeath from "./data/covid-death.json";
var vector = getCovidLayer(covidDeath);
```

> **info**
> Die Funktion `getCovidLayer()` stammt ebenfalls aus der `helper.js` Datei. Auch hier
> ist dieser Schritt für das Verständnis des GeoStylers nicht notwenig. Auf eine genauere
> Erklärung wird hier somit verzichtet.

(2)

```javascript
const map = new OlMap({
  view: new OlView({
    center: center,
    zoom: 2,
    projection: "EPSG:3857"
  }),
  layers: [base, vector],
  interactions: [new DragPan()]
});
```

**Aufgabe 1.**
Erstellen Sie nun einen neuen Ordner mit dem Namen `data` innerhalb des `src`-Ordners.

**Aufgabe 2.**
Speichern Sie den Inhalt dieser JSON-Datei ([hier](https://raw.githubusercontent.com/geostyler/geostyler-workshop/master/geostyler-app/src/data/covid-death.json)) und fügen Sie diesen anschließend in eine Datei mit dem Namen `covid-death.json` in den `data` Ordner ein.

***Aufgabe 3.***
Importieren Sie nun das GeoJSON in die `App.js` Datei und erstellen Sie daraus einen OL-Layer mit dem Namen `vector`, mit Hilfe der Funktion `getCovidLayer`.
Fügen Sie die `vector` - Variable nun dem `map` - Objekt hinzu.

Die Anwendung sollte anschließend wie folgt aussehen:

[![](../images/stepThreeImage.png)](../images/stepThreeImage.png)

Der Code Ihrer Lösung könnte wie folgt aussehen:

```javascript
import React, { useState, useEffect } from "react";

import OlMap from "ol/Map";
import OlView from "ol/View";
import DragPan from "ol/interaction/DragPan";

import isElementInViewport from "./viewportHelper";

import "./App.css";
import "ol/ol.css";
import "antd/dist/antd.css";
import "./Workshop.css";
import Attributions from "./Attributions";
import { getBaseLayer, getCovidLayer } from "./helper";

import { MapComponent } from "@terrestris/react-geo";

import covidDeath from "./data/covid-death.json";

var base = getBaseLayer();
var vector = getCovidLayer(covidDeath);

const center = [0, 8000000];

const map = new OlMap({
  view: new OlView({
    center: center,
    zoom: 2,
    projection: "EPSG:3857"
  }),
  layers: [base, vector],
  interactions: [new DragPan()]
});

function App() {
  let [visibleBox, setVisibleBox] = useState(0);

  useEffect(() => {
    // add scroll eventlistener
    // unfortunately, this will be re-run as soon as visible
    // box changes. Otherwise we don't have visible box in our scope
    const getVisibleBox = () => {
      const boxes = [
        document.getElementById("ws-overlay-1"),
        document.getElementById("ws-overlay-2"),
        document.getElementById("ws-overlay-3")
      ];
      const boxIdx = boxes.findIndex(box => isElementInViewport(box));
      return boxIdx >= 0 ? boxIdx : visibleBox;
    };

    const handleScroll = () => {
      const newVisibleBox = getVisibleBox();
      if (newVisibleBox !== visibleBox) {
        setVisibleBox(newVisibleBox);
      }
    };

    document.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [visibleBox]);

  return (
    <div className='App'>
      <MapComponent map={map} />
      <span id='ws-overlay-1' className='ws-overlay'>
        <h1>Overlay {visibleBox + 1}</h1>
        <p>Put your info text here</p>
      </span>
      <div id='ws-overlay-2' className='ws-overlay'>
        <h1>Overlay {visibleBox + 1}</h1>
        <p>Put your info text here</p>
      </div>
      <div id='ws-overlay-3' className='ws-overlay'>
        <h1>Overlay {visibleBox + 1}</h1>
        <p>Put your info text here</p>
      </div>
      <Attributions />
    </div>
  );
}

export default App;
```

Im folgenden Unterkapitel werden wir der Anwendung einen Drawer und einen Button hinzufügen.
Innerhalb dieses Drawers werden wir dann folglich den `GeoStyler` einbinden.