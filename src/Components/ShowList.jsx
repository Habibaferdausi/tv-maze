import React, { useEffect, useState } from "react";

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
      <h2>TV Shows</h2>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h3>{show.show.name}</h3>
          <p>{show.show.summary}</p>
          <button onClick={() => onShowSelect(show.show)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
