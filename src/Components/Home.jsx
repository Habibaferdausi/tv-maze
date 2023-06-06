import React, { useState } from "react";

import BookingForm from "./BookingForm";
import ShowList from "./Showlist";
import ShowDetail from "./ShowDetail";
import { Col } from "react-bootstrap";
import Nav from "./Nav";

const Home = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      <Nav></Nav>
      <div>
        {!selectedShow ? (
          <Col>
            {" "}
            <ShowList onShowSelect={handleShowSelect} />
          </Col>
        ) : (
          <div>
            <Col>
              <ShowDetail show={selectedShow} />
            </Col>
            <Col>
              <BookingForm show={selectedShow} />
            </Col>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
