import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";

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

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    console.log("Form submitted:", { name, email });
    Swal.fire({
      icon: "success",
      title: "Yes...",
      text: "Successfully Booking Done",
    });
  };

  return (
    <div className="m-5 p-5">
      <Card>
        <Card.Body>
          <Card.Title>
            <h2 className="text-success text-center"> Booking Form</h2>
          </Card.Title>
          <Card.Subtitle className="mb-4">
            {" "}
            <h4 className="text-danger text-center">
              Movie : {show.name}
            </h4>{" "}
          </Card.Subtitle>
          <Form
            onSubmit={handleSubmit}
            className="text-center fw-semibold mx-5 px-5"
          >
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3">Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Book Now
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookingForm;
