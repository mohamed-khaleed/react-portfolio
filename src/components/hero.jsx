
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yourImage from '../assets/photo-1599974816592-f20b60cca4e1-removebg-preview.png';
function Hero() {
  return (
    <header className='d-flex justify-content-center align-items-center '>
      <Container>
      <Row className='w-100'>
        <Col md={6}   >
          <div className='hero-content h-100  d-flex  justify-content-center align-items-center'>
            <div className='hero-content-wrapper '>
               <h1 className='mb-2 display-3 fw-medium'>mohamed khaled hamdy</h1>
               <p className='mb-2 h2 text-capitalize'>front-end developer</p>
               <button className='mt-2 p-2 cv-btn' variant="outline-secondary">contact me</button>
            </div>
          </div>
        </Col>
        <Col md={6}   >
          <div className='hero-img d-flex   justify-content-center align-items-center'>
            <img src={yourImage} alt="mohamed khaled" className='img-fluid '/>
          </div>
        </Col>
      </Row>
      </Container>
      
    </header>
  )
}

export default Hero
