import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
const ShowDetail = ({ show }) => {
  return (
    <div className="m-5 p-5">
      <h2 className="mb-4 text-info text-center">Movie Details</h2>
      <Card className="mt-5">
        <Row noGutters>
          <Col md={4}>
            {show.image && (
              <Card.Img
                variant="top"
                src={show.image.medium}
                alt={show.name}
                style={{ maxHeight: "500px" }}
              />
            )}
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className="text-primary mt-4 mb-4 text-center font-bold">
                <h2>{show.name}</h2>
              </Card.Title>
              <Card.Text className="mb-3 fw-bold">
                Description:
                <span className="fw-semibold text-secondary">
                  {show.summary}
                </span>
              </Card.Text>
              <Card.Text className="mb-3 fw-bold">
                Official Site:
                <span className="text-primary"> {show.officialSite}</span>
              </Card.Text>
              <Card.Text className="mb-3 fw-bold">
                Language:<span className="fw-semibold"> {show.language}</span>
              </Card.Text>
              <Card.Text className="mb-3 fw-bold">
                Run Time:
                <span className="fw-semibold"> {show.runtime} Minutes</span>
              </Card.Text>
              <Card.Text className="mb-3 fw-bold">
                Avg Run Time:
                <span className="fw-semibold">
                  {show.averageRuntime} Minutes
                </span>
              </Card.Text>
              <Card.Text className="mb-3 fw-bold">
                Premiered :
                <span className="fw-semibold"> {show.premiered}</span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ShowDetail;
