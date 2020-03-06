# MapComponent einbinden

Die react-geo Komponente dient als Wrapper für eine OpenLayers map. Die 
`OlMap` Variable `map` wird der `MapComponent` als eine Property 
(prop) hinzugefügt.

```javascript
 <MapComponent map={map} />
```

>Bevor React, sowie OpenLayers und react-geo verwendet werden können, müssen diese
zu Beginn der Anwendung aus der jeweiligen Bibliothek importiert werden.
>Dies geschieht beispielsweise durch:
```javascript
import OlMap from 'ol/Map';
import { MapComponent } from '@terrestris/react-geo';
```

Die Hintergrundkarte (im Code mit der Variable `base` genannt) ist eine eigene 
isolierte React-geo Komponente und wird durch den Befehl 
`import { getBaseLayer,} from './helper';` der App.js Datei zugänglich gemacht.


> Der Übersicht halber wurde diese jedoch Datei aus `App.js` nach `helper.js` ausgelagert. 


Aufgabe 1. 
Erstellen Sie eine Datei mit dem Namen `helper.js` und kopieren Sie den 
Inhalt folgender [Datei](www.link-to-helper.js.de).
Fügen Sie den Inhalt in die von Ihnen erstellte `helper.js` Datei ein. Achten Sie darauf,
dass sich sowohl `App.js` als auch `helper.js` in dem gleichen Ordner befinden.

Aufgabe 2.
Ersetzen Sie den Inhalt der `App.js` Datei mit dem Code-Block im unteren Bereich dieser Seite.

Ihre Anwendung sollte, insofern Sie die Datein gespeichert haben, wie folgt aussehen:




```javascript
import React from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import DragPan from 'ol/interaction/DragPan';

import './App.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
import './Workshop.css';
import {
  getBaseLayer,
} from './helper';

import {
  MapComponent
} from '@terrestris/react-geo';


var base = getBaseLayer();

const center = [0, 8000000];

const map = new OlMap({
  view: new OlView({
    center: center,
    zoom: 2,
    projection: 'EPSG:3857'
  }),
  layers: [base],
  interactions: [new DragPan()]
});

function App() {

  return (
    <div className="App">
      <MapComponent
        map={map}
      />
    </div>
  );
}

export default App;
```
