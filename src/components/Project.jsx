import Card from 'react-bootstrap/Card';

export default function Project({ title, description, image, link }) {
  return (
    <Card className="project-card">
      <div className="project-card-content">
        <Card.Img className="project-card-image" src={image} style={{borderRadius: '30px'}}/>
        <Card.Body className="project-card-body">
          <Card.Title className='projectTitle'>{title}</Card.Title>
          <hr style={{color: 'white', marginLeft: 0, width: '100%'}}/>
          <Card.Text>{description}</Card.Text>
          <Card.Link href={link}>
            Ver proyecto
          </Card.Link>
        </Card.Body>
      </div>
    </Card>
  );
}
