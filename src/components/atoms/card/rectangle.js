import './index.css';

const Rectangle = (props) => {
    const { label, value } = props;
    return (
        <div className="card width-extend" >
        <h1>
        <span className="enclosed">{label}</span>{value}
        </h1>
    </div>
    )
}

export default Rectangle;
