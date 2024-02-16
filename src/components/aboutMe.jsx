import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <section className='about-me d-flex   justify-content-center align-items-center '>
     <Container className=' mx-auto p-5'  >
      <Row>
        <Col xl={4}>
          <div className="about-me-header">
             <h2 className='text-capitalize display-5'>about me</h2>
          </div>
        </Col>
        <Col xl={8}>
        <div className="about-me-header">
             <p className='mb-3 lead mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit inventore placeat hic quidem porro adipisci esse ipsa, aliquid veniam? Rem ipsum sunt illo voluptate neque officia saepe, repellat voluptatum optio.</p>
             <a  href="../assets/1696524301811.pdf" download="../assets/1696524301811.pdf">
             <input className='p-2 cv-btn' type="button" value="Download CV" />
            </a>
        </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default AboutMe

