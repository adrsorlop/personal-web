export default function Card({ title, type, level }) {

    const imgSrc = require(`../images/logos/${title}.png`);
    var color;

    function getSkillLevel(level) {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < level) {
                stars.push(<i key={i} className="bi bi-star-fill" style={{ color: '#FFD700' }}></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star" style={{ color: '#FFD700' }}></i>);
            }
        }

        return stars;
    }

    switch (type) {
        case 'lang': color = '#551768'; break;
        case 'web': color = '#ccc900'; break;
        case 'version': color = '#0f500f'; break;
        default: color = '#000000'; break;
    }

    return (
        <>
            <div className="card" style={{ background: `linear-gradient(150deg, #161616, ${color})` }}>
                <img src={imgSrc} alt="Card image" style={{ paddingTop: '20px' }} />
                <h5>{title}</h5>
            </div>
            <div className="skill-stars">{getSkillLevel(level)}</div>
        </>
    )
}