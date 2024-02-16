import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioList from './items-components/portfolio/portfolioList';

function Portfolio() {
  return (
    <section className='portfolio py-5'>
       <Container className='mx-auto'>
        <h2 className='mb-5 text-capitalize fw-bold display-5'>portfolio</h2>
      <Row  className="g-3  " >
        <PortfolioList />
      </Row>
      
    </Container>
    </section>
  )
}

export default Portfolio
