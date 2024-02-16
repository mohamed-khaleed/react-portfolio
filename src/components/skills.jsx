import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsProgress from "./items-components/skillsProgress/skillsProgressList";

function Skills() {
  return (
    <section className="skills py-5">
      <Container className=" mx-auto">
        <div className="skills-header text-center mb-5">
          <h2 className="display-2 text-capitalize fw-medium mb-3">skills</h2>
          <p className="lead skills-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            provident, dolorum suscipit officia animi cum repudiandae quasi
            necessitatibus. Distinctio veritatis nobis, nam blanditiis, ipsam
            doloremque voluptatem ullam, optio animi commodi eius laborum
            
          </p>
        </div>
        <Row>
          <Col xl={6} xs={12}>
            <div className="focus-part mb-5 text-center text-capitalize">
              <h3 className="display-5 mb-4 ">my focus</h3>
              <div className="line w-25 mb-4  m-auto"></div>
              <p className="lead">ui/ux design</p>
              <p className="lead ">responsive design</p>
              <p className="lead">web design</p>
            </div>
          </Col>
          <Col xl={6} xs={12} className="text-center">
            <SkillsProgress />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
