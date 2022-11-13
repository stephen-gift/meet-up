import React from "react";
import NewMeetupForm from "../Components/Meetups/NewMeetupForm";

const NewMeetUps = () => {
const addMeetupHandler=(meetupData)=>{
  
}

  return (
    <section>
      <h1>NewMeetUps</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetUps;
