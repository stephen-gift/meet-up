import React, { useState } from "react";
import MeetUpList from "../Components/Meetups/MeetUpList";

const AllMeetUps = () => {
  const URL =
    "https://reactprojecttest1-default-rtdb.firebaseio.com/meetups.json";

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  fetch(URL)
    .then((response) => {
      return response.json;
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>AllMeetUps</h1>
      <MeetUpList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetUps;
