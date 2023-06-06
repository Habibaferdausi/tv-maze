import React from "react";
const ShowDetail = ({ show }) => {
  return (
    <div>
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
      <button onClick={() => console.log("Book ticket clicked")}>
        Book Ticket
      </button>
    </div>
  );
};

export default ShowDetails;
