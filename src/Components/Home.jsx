import React from "react";
import ShowList from "./Showlist";
import ShowDetails from "./ShowDetails";
import BookingForm from "./BookingForm";

const Home = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      <h1>TV Shows App</h1>
      {!selectedShow ? (
        <ShowList onShowSelect={handleShowSelect} />
      ) : (
        <div>
          <ShowDetails show={selectedShow} />
          <BookingForm show={selectedShow} />
        </div>
      )}
    </div>
  );
};

export default Home;
