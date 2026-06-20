export default function Skill({ title, img }) {

    return(
        <div className="skill-card">
            <i class={img} style={{ fontSize: '4rem' }} />
            <h4>{title}</h4>
        </div>
    )
}