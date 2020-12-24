import './index.css';
import { SquareCard, RectangleCard } from '../../atoms/card/index.js';

const MetricInfo = (props) => {
  const { data, type } = props;
  const { squareCard, rectangleCard } = data;

  return (
    <div>
      <h3 class="heading">{type}</h3>
      <div className="outer">
        <div className="wrapper">
            {
            squareCard.map((item) => (
              <SquareCard
                label={item.label}
                value={item.value}
              />
            ))}
            {
            rectangleCard.map((item) => (
              <RectangleCard
                label={item.label}
                value={item.value}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default MetricInfo;
