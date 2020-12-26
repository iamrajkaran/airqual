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
      <div className ="row">


        <div className ="col-md-6 padding-zero">
          <Weather
            data={weatherData}
            label={label1} />
        </div>

        <div className ="col-md-6 padding-zero">
          <Pollution
            data={pollutionLevelData}
            label={label2} />
        </div>
      </div>
    );
}

export default AppBody;
