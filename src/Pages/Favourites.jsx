import React, { useContext } from "react";
import MeetUpList from "../Components/Meetups/MeetUpList";
import FavouritesContext from "../Store/FavouritesContext";

const Favourites = () => {
  const favouritesCtx = useContext(FavouritesContext);
  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You have no Favourites yet</p>;
  } else {
    content = <MeetUpList meetups={favouritesCtx.favourites} />;
  }
  return (
    <section>
      <h1>Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;
