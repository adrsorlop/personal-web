import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Project({ title, description, images, link }) {

  const [zoomImage, setZoomImage] = useState(null);

  function getImages() {
    if (images.length <= 1) {
      return (
        <img
          src={images[0]}
          className='projectImg'
          onClick={() => setZoomImage(images[0])}
          style={{ cursor: 'pointer' }}
        />
      );
    } else {
      return (
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image}
                className='projectImg'
                onClick={() => setZoomImage(image)}
                style={{ cursor: 'pointer' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      );
    }
  }

  return (
    <>
      <Card className="project-card">
        <div className="project-card-content">
          <h3>{title}</h3>
          <hr style={{ color: 'white', marginLeft: 0, width: '100%' }} />
          <Row>
            <Col xs={12} sm={6} md={6}>
              {getImages()}
            </Col>
            <Col xs={12} sm={6} md={6}>
              <Card.Body className="project-card-body">
                <Card.Text>{description}</Card.Text>
                <Card.Link href={link}>Ver proyecto</Card.Link>
              </Card.Body>
            </Col>
          </Row>
        </div>
      </Card>

      {/* Overlay de imagen ampliada */}
      {zoomImage && (
        <div
          className="zoom-overlay"
          onClick={() => setZoomImage(null)}
        >
          <img src={zoomImage} className="zoomed-img" />
        </div>
      )}
    </>
  );
}
