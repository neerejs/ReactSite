import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'



function App() {
  return (
    <div className="App">
      
      <Container>

        <h1>Home Page</h1>
        <Row className="homeCol">
          <Col md={4} >
            <Image src="https://source.unsplash.com/random/500x200?nature" fluid></Image>
          </Col>
          <Col md={8} >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </Col>
        </Row>
        <Row className="homeCol">
          <Col md={8} >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </Col>
          <Col md={4} >
            <Image src="https://source.unsplash.com/random/500x200?dogs" fluid></Image>
          </Col>
        </Row>
        <Row className="homeCol">
          <Col md={4} >
            <Image src="https://source.unsplash.com/random/500x200?car" fluid></Image>
          </Col>
          <Col md={8} >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
