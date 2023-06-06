import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
const ShowDetail = ({ show }) => {
  return (
    <div className="m-5 p-5">
      <h2 className="mb-4 text-info text-center">Movie Details</h2>
      <Card className="mt-5">
        {show.image && (
          <Card.Img
            variant="top"
            src={show.image.medium}
            alt={show.name}
            style={{ maxHeight: "500px" }}
          />
        )}
        <Card.Body>
          <Card.Title className="text-primary mt-4 mb-4 text-center font-bold">
            <h2>{show.name}</h2>
          </Card.Title>
          <Card.Text className="text-secondary mb-3">{show.summary}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowDetail;
