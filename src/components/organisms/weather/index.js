import './index.css';
import MetricInfo from '../../molecules/metricInfo/index.js';

const basePath = './images/weather';
const imagesPath = {
  cloud: `${basePath}/cloud.png`,
  sunny: `${basePath}/sunny.png`,
  snow: `${basePath}/snow.png`,
  thunder: `${basePath}/thunder.png`,
  night: `${basePath}/night.png`,
  clear: `${basePath}/clear.png`,
};

const getImage = (ic) => {
  if (ic === '01d') {
    return imagesPath.sunny;
  }

  if (ic === '01n') {
    return imagesPath.night;
  }

  if (ic === '02d' || ic === '02n') {
    return imagesPath.clear;
  }

  if (ic === '03d' || ic === '04d') {
    return imagesPath.cloud;
  }

  if (ic === '09d' || ic === '10d' || ic === '10n' || ic === '11d') {
    return imagesPath.thunder;
  }

  if (ic === '13d') {
    return imagesPath.snow;
  }

  return imagesPath.clear;
}

const Weather = (props) => {
  const { data, label } = props;
  const { hu, ic, pr, tp, ws } = data;
  const style = { backgroundImage: `url(${getImage(ic)})` };
  const squareCard = [{
    label: 'Temperature',
    value: `${tp}°c`,
  },
  {
    label: 'Wind Speed',
    value: `${ws}m/s`,
  },
  {
    label: 'Atmospheric Pressure',
    value: `${pr}hPa`,
  },
  {
    label: 'Humidity',
    value: `${hu}%`,
  }];

  const metrics = {
    squareCard,
    rectangleCard: [],
  };

  return (
    <div style = {style}>
      <MetricInfo
        type={label}
        data={metrics}
      />
    </div>
  )
}

export default Weather;
