import AppHeader from '../../components/templates/AppHeader/index.js';
import AppBody from '../../components/templates/AppBody/index.js';
import './index.css';
import React, { useState, useEffect } from 'react';
import { Eclipse } from "react-loading-io";

const getAirMetrics = async(GeoLocationService, AirQualityMetricService) => {
  let airQualityMetricResponse;
  const geoLocationServiceResponse = await GeoLocationService();
  if (geoLocationServiceResponse.data) {
    airQualityMetricResponse = await AirQualityMetricService(geoLocationServiceResponse.data.coords);
  }

  return airQualityMetricResponse;
}

const Home = (props) => {
  const { GeoLocationService, AirQualityMetricService, } = props;
  const [airMetricsStore, setAirMetricsStore] = useState({});

  useEffect(() => {
      const getData = async () => {
        const result = await getAirMetrics(GeoLocationService, AirQualityMetricService);
        setAirMetricsStore(result.data);
      };

      getData();
  },[]);

  const renderAirMetricsTemplate = () => {
    return (
      <div className ="container-fluid">
        <div className ="row app-header">
            <AppHeader
              airMetricsStore={airMetricsStore}
            />
        </div>
        <div className ="row app-body">
            <AppBody
              airMetricsStore={airMetricsStore}
            />
        </div>
      </div>);
  }

  const renderZeroStateAirMetricsTemplate = () => {
    return <Eclipse size={250} />;
  }

  const renderHomeTemplate = () => {
    if(Object.keys(airMetricsStore).length > 0) {
      return renderAirMetricsTemplate();
    }

    return renderZeroStateAirMetricsTemplate();
  }

  return (
    <div className= "home">
      {renderHomeTemplate()}
    </div>
  );
}

export default Home;
