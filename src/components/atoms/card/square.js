import './index.css';

const Square = (props) => {
    const { label, value } = props;
    return (
        <div className="card" >
            <h1>
            <span className="enclosed">{label}</span>{value}
            </h1>
        </div>
    )
}

export default Square;
