# Summary

Congratulations! You finished the react-geo-workshop!

In this workshop you learned to setup your first react-based application. Through the addition of different react-geo components such as `MapComponent`, `NominatimSearch` and `MeasureButton` you made the step from a simple `Hello World` to a fully fledged map application.

Your complete application should look something like this:

[![](../screenshots/summary.png)](../screenshots/summary.png)

And here is the complete source code:

```javascript
import React, { useState } from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlLayerGroup from 'ol/layer/Group';

import { Drawer } from 'antd';

import {
  SimpleButton,
  MapComponent,
  NominatimSearch,
  MeasureButton,
  LayerTree,
  MapProvider,
  mappify,
  onDropAware
} from '@terrestris/react-geo';

import './App.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
import './react-geo.css';

const MappifiedNominatimSearch = mappify(NominatimSearch);
const MappifiedMeasureButton = mappify(MeasureButton);
const MappifiedLayerTree = mappify(LayerTree);
const Map = mappify(onDropAware(MapComponent));

const layerGroup = new OlLayerGroup({
  name: 'Layergroup',
  layers: [
    new OlLayerTile({
      source: new OlSourceOsm(),
      name: 'OSM'
    }),
    new OlLayerTile({
      name: 'SRTM30-Contour',
      minResolution: 0,
      maxResolution: 10,
      source: new OlSourceTileWMS({
        url: 'https://ows.terrestris.de/osm/service',
        params: {
          'LAYERS': 'SRTM30-Contour'
        }
      })
    }),
    new OlLayerTile({
      name: 'OSM-Overlay-WMS',
      minResolution: 0,
      maxResolution: 200,
      source: new OlSourceTileWMS({
        url: 'https://ows.terrestris.de/osm/service',
        params: {
          'LAYERS': 'OSM-Overlay-WMS'
        }
      })
    })
  ]
});

const center = [ 788453.4890155146, 6573085.729161344 ];

const map = new OlMap({
  view: new OlView({
    center: center,
    zoom: 16,
  }),
  layers: [layerGroup]
});

function App() {
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible(!visible);
  }

  return (
    <div className="App">
      <MapProvider map={map}>
        <Map />
        <SimpleButton
          style={{position: 'fixed', top: '30px', right: '30px'}}
          onClick={toggleDrawer}
          icon="bars"
        />
        <Drawer
          title="react-geo-application"
          placement="right"
          onClose={toggleDrawer}
          visible={visible}
          mask={false}
        >
          <MappifiedNominatimSearch
            key="search"
          />
          <MappifiedMeasureButton
            key="measureButton"
            name="line"
            measureType="line"
            icon="pencil"
          >
            Measure distance
          </MappifiedMeasureButton>
          <MappifiedLayerTree
            layerGroup={layerGroup}
          />
        </Drawer>
      </MapProvider>
    </div>
  );
}

export default App;
```
