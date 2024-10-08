import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  songs: [],
  error: null,
  isLoading : false//for testing purposes , set false on prod,
}

const songSlice = createSlice({
  initialState: initalState,
  name: 'songs',
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsFetchSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    getSongsFetchFail: (state, action) => {
      state.isLoading = false,
      state.error = action.payload;
    },
    uploadSongRequest: (state) => {
      state.isLoading = true;
    },
    uploadSongRequestSuccess: (state, action) => {
      state.songs.push(action.payload);
      state.isLoading = false;
   
    },
    uploadSongRequestFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    deleteSongRequest: (state) => {
      state.isLoading = true;
      console.log('request to delete')
    },
    deleteSongRequestSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    deleteSongRequestFail: (state) => {
      state.isLoading = false;
    },
    updateSongsRequest: (state) => {
      state.isLoading = true;
    },
    updateSongsRequestSuccessful: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    updateSongsRequestFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearPlaylistRequest : (state,action)=>{
      state.isLoading  = true;
    },
    clearPlaylistSuccessfull : (state,action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    clearPlaylistFail : (state,action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})


export const { getSongsFetch, getSongsFetchFail, getSongsFetchSuccess, 
  uploadSongRequest, uploadSongRequestSuccess, uploadSongRequestFail, 
  deleteSongRequest, deleteSongRequestFail, deleteSongRequestSuccess,
  updateSongsRequest,updateSongsRequestSuccessful,updateSongsRequestFail,
  clearPlaylistRequest,clearPlaylistSuccessfull,clearPlaylistFail
   } = songSlice.actions;
export default songSlice.reducer;

