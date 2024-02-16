import Col from "react-bootstrap/Col";
function PortfolioItem({ data }) {
  return (
    <Col
      className="mb-5  d-flex align-items-center justify-content-center"
      xl={4}
      md={6}
      xs={12}
    >
      <div
        className={
          data.id % 2 === 0
            ? "card bg-lightBlue custom-div"
            : "card  custom-div"
        }
      >
        <div className="card-inner">
          <h4 className="mb-4">{data.title}</h4>
          <div className="line"></div>
        </div>
      </div>
    </Col>
  );
}

export default PortfolioItem;
