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
        <h2 className="text-center text-success pb-5 mt-5">
          {" "}
          Welcome to TV Shows
        </h2>
        <Row>
          {shows.map((show) => (
            <Col key={show.show.id} lg={6} sm={1} className="mb-4 ">
              <Container>
                <Card
                  className=""
                  style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
                >
                  <Row noGutters>
                    <Col md={4}>
                      <Card.Img
                        variant="top"
                        src={show.show.image?.medium}
                        style={{ objectFit: "cover", height: "350px" }}
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title
                          className="text-primary"
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        >
                          {show.show.name}
                        </Card.Title>
                        <Card.Text className="text-secondary">
                          {show.show.summary}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                    <Card.Footer className="text-end">
                      <Button
                        variant="info"
                        onClick={() => onShowSelect(show.show)}
                      >
                        View Details
                      </Button>
                    </Card.Footer>
                  </Row>
                </Card>
              </Container>
            </Col>
          ))}
        </Row>
      </>
    </div>
  );
};

export default ShowList;
