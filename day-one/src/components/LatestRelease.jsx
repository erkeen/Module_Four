import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data/fantasy.json";

class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
          {books.map((book) => {
            return (
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
