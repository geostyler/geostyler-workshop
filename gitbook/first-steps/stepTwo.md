# MapComponent einbinden (Step 2)

Now that we have `react-geo` installed, we can use it's components in the
*{{ book.reactAppName }}* application. For demonstration purposes we'll now
add a [simple button](https://terrestris.github.io/react-geo/docs/latest/index.html#!/SimpleButton)
to the application.

Please open a text editor (if not already done) and open the file `App.js` from
the `src` directory of your *{{ book.reactAppName }}* application. Now import the
`SimpleButton` class with the following statement:

Your final solution should look like the following snippet:

```javascript
import React, { useState, useEffect } from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import DragPan from 'ol/interaction/DragPan';

import isElementInViewport from './viewportHelper';

import './App.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
import './Workshop.css';
import Attributions from './Attributions';
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

  let [visibleBox, setVisibleBox] = useState(0);

  useEffect(() => {
    // add scroll eventlistener
    // unfortunately, this will be re-run as soon as visible
    // box changes. Otherwise we don't have visible box in our scope
    const getVisibleBox = () => {
      const boxes = [
        document.getElementById('ws-overlay-1'),
        document.getElementById('ws-overlay-2'),
        document.getElementById('ws-overlay-3')
      ]
      const boxIdx = boxes.findIndex(box => isElementInViewport(box));
      return boxIdx >= 0 ? boxIdx : visibleBox;
    }

    const handleScroll = () => {
      const newVisibleBox = getVisibleBox();
      if (newVisibleBox !== visibleBox) {
        setVisibleBox(newVisibleBox);
      }
    }

    document.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [visibleBox]);

  return (
    <div className="App">
      <MapComponent
        map={map}
      />
      <span id="ws-overlay-1" className="ws-overlay">
        <h1>Overlay {visibleBox + 1}</h1>
        <p>
          Put your info text here
          </p>
      </span>
      <div id="ws-overlay-2" className="ws-overlay">
        <h1>Overlay {visibleBox + 1}</h1>
        <p>
          Put your info text here
          </p>
      </div>
      <div id="ws-overlay-3" className="ws-overlay">
        <h1>Overlay {visibleBox + 1}</h1>
        <p>
          Put your info text here
          </p>
      </div>
      <Attributions />
    </div>
  );
}

export default App;
```