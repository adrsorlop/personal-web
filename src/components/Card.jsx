export default function Card({ title, type }) {

    const imgSrc = require(`../images/logos/${title}.png`);
    var color;

    switch(type) {
        case 'lang': color = '#551768'; break;
        case 'web': color = '#ccc900'; break;
        case 'version': color = '#0f500f'; break;
        default: color = '#000000'; break;
    }

    return(
        <div className="card" style={{background: `linear-gradient(150deg, #161616, ${color})` }}>
            <img src={imgSrc} alt="Card image" style={{ paddingTop: '20px' }} />
            <h3>{title}</h3>
        </div>
    )
}