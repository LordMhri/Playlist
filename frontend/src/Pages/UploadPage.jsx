import React, { useState,useEffect } from "react";
import { GlobalStyle, StyledContainer, TextInput, StyledHeader, StyledButton } from "../Styles/Styling";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uploadSongRequest } from "../redux/songSlice";

const UploadPage = () => {
  
  const dispatch = useDispatch();


  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    album: '',
    duration: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewSong((prevSong) => ({
      ...prevSong,  
      [name]: value
    }));
  };

  const handleUpload = () => {
    if (newSong.title && newSong.artist && newSong.album && newSong.duration) {
      dispatch(uploadSongRequest(newSong));
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <h2>Upload a Song</h2>
        <h3>Enter Song Details</h3>
        <StyledHeader>Title</StyledHeader>
        <TextInput name="title" value={newSong.title} onChange={handleChange}></TextInput>
        <StyledHeader>Artist</StyledHeader>
        <TextInput name="artist" value={newSong.artist} onChange={handleChange}></TextInput>
        <StyledHeader>Album</StyledHeader>
        <TextInput name="album" value={newSong.album} onChange={handleChange}></TextInput>
        <StyledHeader>Duration</StyledHeader>
        <TextInput name="duration" value={newSong.duration} onChange={handleChange}></TextInput>
        <StyledButton variant='Upload' onClick={handleUpload}>Upload</StyledButton>
      </StyledContainer>
    </>
  );
};

export default UploadPage;
