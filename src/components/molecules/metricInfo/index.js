import './index.css';
import { SquareCard, RectangleCard } from '../../atoms/card/index.js';

const MetricInfo = (props) => {
  const { data, type } = props;
  const { squareCard, rectangleCard } = data;

  return (
    <>
      <h3 className="heading">{type}</h3>
      <div className="outer">
        <div className="wrapper">
            {
            squareCard.map((item, index) => (
              <SquareCard
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
            {
            rectangleCard.map((item, index) => (
              <RectangleCard
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default MetricInfo;
