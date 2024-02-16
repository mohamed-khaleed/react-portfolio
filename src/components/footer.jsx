import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faLinkedin ,faGithub } from '@fortawesome/free-brands-svg-icons';
import {  faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <footer className='footer   d-flex align-items-center justify-content-center'>
       <Container className=' mx-auto'  >
      <Row>
        <Col md={4} xs={12}  className='mb-4' >
          <div className="getIn-touch-part  h-100 ">
             <h3 className='mb-3 text-capitalize'>get in touch</h3>
             <p> <FontAwesomeIcon icon={faEnvelope} /> mohamed@gmail.com </p>
             <p> <FontAwesomeIcon icon={faPhone} /> 01012607328 </p>
          </div>
        </Col>
        <Col md={4} xs={12} className='mb-4' >
            <div className="contact-me-btn-part  h-100   text-center">
            <button className='mt-2 p-2 cv-btn' variant="outline-secondary">contact me</button>
             </div>
        </Col>
        <Col md={4} xs={12} className='mb-4'  >
             <div className="copyright-part  h-100 ">
              <span>
                
                 <a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/mohamed.khalid.17"> <FontAwesomeIcon className='me-3' icon={faFacebookF} /> </a>
                 <a target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-khaled--/"> <FontAwesomeIcon className='me-3' icon={faLinkedin} /></a>
                  <a target="_blank"  rel="noopener noreferrer" href="https://github.com/mohamed-khaleed"> <FontAwesomeIcon className='me-3' icon={faGithub} /></a>
               </span>
              <p>copywrite@2024</p>
            
             </div>
         </Col>
      </Row>
    </Container>
    </footer>
  )
}

export default Footer
