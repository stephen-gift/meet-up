import React, { useEffect, useState } from "react";
import MeetUpList from "../Components/Meetups/MeetUpList";

const AllMeetUps = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const URL =
    "https://reactprojecttest1-default-rtdb.firebaseio.com/meetups.json";

  useEffect(() => {
    setIsLoading(true);

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

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
