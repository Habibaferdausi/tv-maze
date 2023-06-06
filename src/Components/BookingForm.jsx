import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const BookingForm = ({ show }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data to local/session storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    console.log("Form submitted:", { name, email });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Booking Form</Card.Title>
        <Card.Subtitle className="mb-4">Movie: {show.name}</Card.Subtitle>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Book Now
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default BookingForm;
