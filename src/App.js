import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavigation from "./Components/Layout/MainNavigation";
import AllMeetUps from "./Pages/AllMeetUps";
import Favourites from "./Pages/Favourites";
import NewMeetUps from "./Pages/NewMeetUps";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<AllMeetUps />} />
        <Route exact path="/new-meetup" element={<NewMeetUps />} />
        <Route exact path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
