export default function Card({ img, title, color }) {

    const imgSrc = require(`../images/logos/${img}.png`);

    return(
        <div className="card" style={{ backgroundColor: color }}>
            <h3>{title}</h3>
            <img src={imgSrc} alt="Card image"/>
        </div>
    )
}