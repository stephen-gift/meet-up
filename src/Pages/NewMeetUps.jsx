import React from "react";
import NewMeetupForm from "../Components/Meetups/NewMeetupForm";

const NewMeetUps = () => {
  const addMeetupHandler = (meetupData) => {
    const URL =
      "https://reactprojecttest1-default-rtdb.firebaseio.com/meetups.json";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      header: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section>
      <h1>NewMeetUps</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetUps;
