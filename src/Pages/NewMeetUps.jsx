import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../Components/Meetups/NewMeetupForm";

const NewMeetUps = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    const URL =
      "https://reactprojecttest1-default-rtdb.firebaseio.com/meetups.json";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      header: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
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
