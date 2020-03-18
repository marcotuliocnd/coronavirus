import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMapGl, { Source, Layer } from 'react-map-gl';
import Countries from './countries.json';
import './index.css';

const Mapa = ({ countryState }) => {
  const [viewport, setViewport] = useState({
    zoom: 2,
    width: '100%',
    height: '500px',
  });
  let didMount = false;
  const res = countryState;
  const featureCollection = {
    type: 'FeatureCollection',
    features: [

    ],
  };

  for (let i = 0; i < res.data.length; i += 1) {
    const feature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [],
      },
      properties: {

      },
    };

    const countryName = res.data[i].country;
    let countryEquivalent = Countries.find(
      (country) => country.name.toLocaleLowerCase().trim() === countryName.toLocaleLowerCase().trim(),
    );
    if (!countryEquivalent) {
      console.log(countryName);
      countryEquivalent = {
        capital: 'us',
        latlng: [0, 0],
        name: 'Cruise ship (Diamond Princess)',
      };
    }
    feature.geometry.coordinates = countryEquivalent.latlng.reverse();
    feature.properties = res.data[i];
    featureCollection.features.push(feature);
  }
  setTimeout(() => { didMount = true; }, 50);
  return (
    <>
      <div className="map sombra">
        <div className="map--Inner">
          <ReactMapGl
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoiZ2V0dWxpb2JyIiwiYSI6ImNrN2RnZ3ptZTAyanAzc2xtZ2dsMXp5OHgifQ.MRsV8pDC1wpK_K4SLpBGSA"
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onViewportChange={(viewport) => { if (didMount) setViewport(viewport); }}
          >
            <Source id="coronaLayer" type="geojson" data={featureCollection}>
              <Layer
                id="coronaLayer"
                type="circle"
                source="coronaLayer"
                paint={{
                  'circle-radius': ['case',
                    ['<', ['get', 'totalInfecteds'], 10], 5,
                    ['<', ['get', 'totalInfecteds'], 100], 15,
                    ['<', ['get', 'totalInfecteds'], 1000], 25,
                    ['<', ['get', 'totalInfecteds'], 10000], 35,
                    70,
                  ],
                  'circle-opacity': 0.7,
                  'circle-color': 'red',
                }}
              />
            </Source>
          </ReactMapGl>
        </div>
      </div>
    </>
  );
};

Mapa.propTypes = {
  countryState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  countryState: state.countriesReducer,
});

export default connect(mapStateToProps)(Mapa);
