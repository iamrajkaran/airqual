import './index.css';
import MetricInfo from '../../molecules/metricInfo/index.js';

const basePath = './images/pollution';
const pollutionMetricMapping = {
  green: { imagePath: `${basePath}/green.png`, level: 'Green' },
  moderate: { imagePath: `${basePath}/moderate.png`, level: 'Moderate' },
  unhealthy: { imagePath: `${basePath}/unhealthy.png`, level: 'Unhealthy' },
  unhealthySensitive: { imagePath: `${basePath}/unhealthySensitive.png`, level: 'Unhealthy For Sensitive Groups' },
  veryUnhealthy: { imagePath: `${basePath}/veryUnhealthy.png`, level: 'Very Unhealthy' },
  hazardous: { imagePath: `${basePath}/hazardous.png`, level: 'Hazardous' },
};

const pollutants = {
  p2: 'PM2.5',
  p1: 'PM10',
  o3: 'O3',
  n2: 'NO2',
  s2: 'SO2',
  co: 'CO',
}

const getCurrentPollutionLevel = (aqius) => {
  if (aqius >= 0 && aqius <= 50) {
    return pollutionMetricMapping.green;
  }

  if (aqius >= 51 && aqius <= 100) {
    return pollutionMetricMapping.moderate;
  }

  if (aqius >= 101 && aqius <= 150) {
    return pollutionMetricMapping.unhealthySensitive;
  }

  if (aqius >= 151 && aqius <= 200) {
    return pollutionMetricMapping.unhealthy;
  }

  if (aqius >= 201 && aqius <= 300) {
    return pollutionMetricMapping.veryUnhealthy;
  }

  if (aqius >= 301 && aqius <= 500) {
    return pollutionMetricMapping.hazardous;
  }

  return pollutionMetricMapping.moderate;
}
const Pollution = (props) => {
  const { data, label } = props;
  const { aqius, mainus } = data;
  const mainPollutant = pollutants[mainus];
  const { imagePath, level } = getCurrentPollutionLevel(aqius);

  const style = { backgroundImage: `url(${imagePath})` };
  const squareCard = [{
    label: 'Quality index',
    value: `${aqius} US`,
  },
  {
    label: 'Main Pollutant',
    value: mainPollutant,
  }];
  const rectangleCard = [{
    label: 'Pollution level',
    value: level,
  }];

  const metrics = {
    squareCard,
    rectangleCard
  };

  return (
    <div style = {style} className= "metrics-info">
      <MetricInfo
        type={label}
        data={metrics}
      />
      <div id="imageView-horizontal">
        <img alt="" id= "image-horizontal-info" src="./images/pollution/faces.png" />
      </div>

      <div id="imageView-vertical">
        <img alt= "" id="image-vertical-info" src="./images/pollution/vertical_faces.png" />
      </div>
    </div>
  )
}

export default Pollution;
