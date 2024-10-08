import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import UploadPage from "./Pages/UploadPage.jsx";
import MainPage from "./Pages/MainPage.jsx";
import EditPage from "./Pages/EditPage.jsx";
import { getSongsFetch } from "./redux/songSlice.js";
import DeleteConfirmation from "./Pages/DeleteAlert.jsx";
import ClearPlaylistConfirmation from "./Pages/ClearPlaylist.jsx";
import Loading from "./Components/Loading.jsx";


function App() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const isLoading =  useSelector((state)=> state.songs.isLoading);


  const songId = useParams();

  React.useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  console.log(songs);

  React.useEffect(() => {
    console.log(songs);
}, [songs]);

  if(isLoading){
    return <Loading />
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage songs={songs}/>}/>
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/edit/:songId" element={<EditPage/>} />
        <Route path="/delete/:songId" element={<DeleteConfirmation />} />
        <Route path="/clear-playlist" element= {<ClearPlaylistConfirmation/>} />
      </Routes>
    </Router>
  );
}

export default App;

