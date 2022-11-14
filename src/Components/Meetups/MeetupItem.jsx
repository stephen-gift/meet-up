import React, { useContext } from "react";
import FavouritesContext from "../../Store/FavouritesContext";
import Card from "../Ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const FavouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = FavouritesCtx.itemIsFavourite(props.id);

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      FavouritesCtx.removeFavourite(props.id);
    } else {
      FavouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
