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
