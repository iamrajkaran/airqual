import './index.css';

const Location = (props) => {
    const { message, location } = props;
    const { city, state, country} = location;
    let stateName = `${state},`;
    const imagePath = '/images/title.png'
    const style = { backgroundImage: `url(${imagePath})` };

    if (city === state) stateName = '';

    return (
      <div className="col-md-12" style={style}>
        <h3 id="header-title">{message} {city}, {stateName} {country}  </h3>
      </div>
    );
}

export default Location;
