import React, { useState } from "react";

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
    <div>
      <h2>Booking Form</h2>
      <h3>Movie: {show.name}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
