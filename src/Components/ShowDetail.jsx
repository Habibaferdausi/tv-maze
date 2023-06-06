import React from "react";
import { Button, Card } from "react-bootstrap";
const ShowDetail = ({ show }) => {
  return (
    <div className="mx-auto">
      <Card>
        <Card.Body>
          <Card.Title>{show.name}</Card.Title>
          <Card.Text>{show.summary}</Card.Text>
          <Button
            variant="primary"
            onClick={() => console.log("Book ticket clicked")}
          >
            Book Ticket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowDetail;
