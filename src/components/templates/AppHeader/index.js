import './index.css';
import Location from '../../organisms/location/index.js';

const AppHeader = (props) => {
    const { airMetricsStore } = props;
    const { city, state, country} = airMetricsStore;
    const locationMetric = {
      city,
      state,
      country
    };
    const message = 'Welcome to AirQual, You are nearby';

    return (
      <Location
        message={message}
        location={locationMetric}
      />
    );
}

export default AppHeader;
