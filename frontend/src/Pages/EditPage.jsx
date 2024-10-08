import React, { useState }  from "react";
import { GlobalStyle, StyledContainer, TextInput, StyledHeader, StyledButton } from "../Styles/Styling";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSongsRequest } from "../redux/songSlice";

const EditPage = () => { 
  const navigate = useNavigate();
  const [newSongDetails, setnewSongDetails] = useState({
    title: '',
    artist: '',
    album: '',
    duration: '',
  });

  const dispatch = useDispatch();

  const { songId } = useParams();

  const _id = songId;

  const songs = useSelector((state) => state.songs.songs);

  const handleUpdate = async () => {
    if (newSongDetails.title && newSongDetails.artist && newSongDetails.album && newSongDetails.duration) {

      const updatedSong = {
        ...newSongDetails,
        _id : _id,
      }

      await dispatch(updateSongsRequest(updatedSong));
      navigate('/');
    } else {
      alert('Please fill out the song details');
    }
    }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setnewSongDetails((prevSong) => ({
      ...prevSong,  
      [name]: value
    }));
  };
    return (
        <>
            <GlobalStyle />
            <StyledContainer>

                <h2>Edit Song</h2>
                  <StyledHeader>Title</StyledHeader>
        <TextInput name="title" value={newSongDetails.title} onChange={handleChange}></TextInput>

        <StyledHeader>Artist</StyledHeader>
        <TextInput name="artist" value={newSongDetails.artist} onChange={handleChange}></TextInput>

        <StyledHeader>Album</StyledHeader>
        <TextInput name="album" value={newSongDetails.album} onChange={handleChange}></TextInput>

        <StyledHeader>Duration</StyledHeader>
        <TextInput name="duration" value={newSongDetails.duration} onChange={handleChange}></TextInput>

        <StyledButton variant='Edit' onClick={handleUpdate}>Edit</StyledButton>
        </StyledContainer>
        
        </>
    )

}


export default EditPage;



