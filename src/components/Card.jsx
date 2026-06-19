export default function Card({ img, title, color }) {

    const imgSrc = require(`../images/logos/${img}.png`);


    return(
        <div className="card" style={{background: `linear-gradient(to bottom, #000000, ${color})` }}>
            <h3>{title}</h3>
            <img src={imgSrc} alt="Card image"/>
        </div>
    )
}