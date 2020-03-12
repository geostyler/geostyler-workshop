# Infoboxen hinzufügen

In diesem Abschnitt werden wir der Anwendung drei Boxen (div-Elemente, die durch Angabe von
width & height wie eine Box aussehen) hinzufügen, welche mit einem *scroll
eventlistener* versehen sind. Ziel ist es, den Style des Layers (welcher im folgenden Kapitel hinzugefügt wird) abhängig von der aktuell im Viewport zu sehenden Box zu verändern.

Die jeweiligen Boxen wurden wie folgt erstellt (hier beispielhaft die zweite Box):

```javascript
<div id='ws-overlay-2' className='ws-overlay'>
  <h1>Overlay {visibleBox + 1}</h1>
  <p>Put your info text here</p>
</div>
```

Der `App.js` Datei wird durch den Befehl `import isElementInViewport from "./viewportHelper";` eine Funktion zugänglich gemacht, welche in der `viewportHelper.js` Datei definiert ist.

Diese Funktion erkennt die sich aktuell im Viewport befindende Box.

> **info**
> Für diesen Workshop reicht es zu wissen, dass es diese Funktion gibt. Eine genaue Erläuterung des sich
> in der `viewportHelper.js` Datei befindenden Codes ist für diesen Workshop somit nicht relevant.

Darüber hinaus werden innerhalb der `App`- Funktion zwei State Variablen hinzugefügt:
```javascript
let [visibleBox, setVisibleBox] = useState(0);
```
Diese werden im Folgenden benötigt, um den jeweiligen aktuellen State, ausgehend von der sich
aktuell im Viewport befindenden Box, zu verändern. 

***Aufgabe 1.***
Erstellen Sie drei Infoboxen und fügen Sie diese in die `return` - Funktion der `App` - Funktion ein. 
Diese sollten jeweils die id `'ws-overlay-1'` (Zahl abhängig von der Box) und die Klasse (`className`)
`ws-overlay` beinhalten. Des Weiteren soll sich in der `h1` folgender Code befinden:
`
Overlay {visibleBox + 1}
`

***Aufgabe 2.***
Fügen Sie zwei State Variablen mit den Namen `visibleBox` und `setVisibleBox` der *function Component* hinzu und weisen Sie diesen den Wert `useState(0)` zu.

***Aufgabe 3.***
Fügen Sie folgenden Code Block unterhalb der in Aufgabe 2 erstellten Variablen ein.

```javascript
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
```

> **info**
> Für diesen Workshop reicht es zu wissen, dass es die `useEffect()`- Funktion, sowie den 
>`addEventListener` gibt. Eine genaue Erläuterung ist für diesen Workshop somit nicht relevant.

Ihre Anwendung sollte, insofern Sie die Datein gespeichert haben, nun wie folgt aussehen:


[![](../images/stepTwoImage.png)](../images/stepTwoImage.png)

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

Im nächsten Unterkapitel werden wir der Karte einen Layer hinzufügen.
