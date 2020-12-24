import HorizontalSplit from '../../molecules/horizontalSplit/index.js'; // TD:: fix its position
import Weather from '../../organisms/weather/index.js';
import Pollution from '../../organisms/pollution/index.js';
import './index.css';

const AppBody = (props) => {
    const { airMetricsStore } = props;
    const { current } = airMetricsStore;
    const label1 = 'Weather';
    const label2 = 'Pollution';

    const weatherData = current.weather;
    const pollutionLevelData = current.pollution;

    return (
      <div className = "Metrics">
      <HorizontalSplit>
        <Weather
          data={weatherData}
          label={label1}
        />
        <Pollution
          data={pollutionLevelData}
          label={label2}
        />
      </HorizontalSplit>
      </div>
    );
}

export default AppBody;
