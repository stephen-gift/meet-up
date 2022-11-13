import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AllMeetUps from "./Pages/AllMeetUps";
import Favourites from "./Pages/Favourites";
import NewMeetUps from "./Pages/NewMeetUps";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<AllMeetUps />} />
          <Route exact path="/new-meetup" element={<NewMeetUps />} />
          <Route exact path="/favourites" element={<Favourites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
