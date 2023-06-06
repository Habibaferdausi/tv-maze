import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ShowList = ({ onShowSelect }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <>
        <h2 className="text-center pb-6">TV Shows</h2>
        <Row>
          {shows.map((show) => (
            <Col key={show.show.id} lg={4} sm={1} className="mb-3">
              <Card
                className="h-100 m-3"
                style={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 0, 0, 0.2)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={show.show.image?.medium}
                  alt={show.show.name}
                />
                <Card.Body>
                  <Card.Title className="text-primary  text-center font-bold">
                    <h2>{show.show.name}</h2>
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    {show.show.summary}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="info"
                    onClick={() => onShowSelect(show.show)}
                  >
                    View Details
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    </div>
  );
};

export default ShowList;
