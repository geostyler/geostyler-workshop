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
