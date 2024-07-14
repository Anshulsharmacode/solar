import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="home solar.png" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="comercail.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="pistockphoto-1310235031-612x612.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
