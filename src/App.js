import Home from './pages/home/index.js';
import { GeoLocation, AirQualityMetrics, } from './Services';

const App = () => (
<Home
    GeoLocationService={GeoLocation}
    AirQualityMetricService={AirQualityMetrics}
/>
);

export default App;