import './index.css';

const Location = (props) => {
    const { message, location } = props;
    const { city, state, country} = location;
    let stateName = `${state},`;

    if (city === state) stateName = '';

    return (
      <div className="header-container">
      <img id="image-header" src = './images/title.png' alt=""/>
      <h3 id="header-title">{message} {city}, {stateName} {country}  </h3>
      </div>
    );
}

export default Location;
