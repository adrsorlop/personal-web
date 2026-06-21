import { useEffect, useRef } from "react";

export default function Card({ title, type, level }) {

    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(ref.current);
    }, []);

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
            <div ref={ref} className="card" style={{ background: `linear-gradient(150deg, #161616, ${color})` }}>
                <img src={imgSrc} alt="Card image" style={{ paddingTop: '20px' }} className="cardImg" />
                <h5>{title}</h5>
            </div>
            <br />
            <div className="skill-stars">{getSkillLevel(level)}</div>
        </>
    )
}