import React, { useRef } from "react";
import Card from "../Ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  const title = useRef();
  const image = useRef();
  const address = useRef();
  const description = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = title.current.value;
    const enteredImage = image.current.value;
    const enteredAddress = address.current.value;
    const enteredDescription = description.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    console.log(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={title} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={image} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={address} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            required
            ref={description}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
