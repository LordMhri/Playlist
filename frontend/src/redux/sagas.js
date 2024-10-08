import { call, takeEvery, put,takeLatest } from 'redux-saga/effects';
import { getSongsFetchSuccess, uploadSongRequestSuccess,deleteSongRequestSuccess, clearPlaylistSuccessfull,updateSongsRequestSuccessful} from './songSlice';
import api from '../API/api';

function *fetchSongsFromApi() {
    const songs = yield call(api.fetchSongs);
    console.log('FetchedSongs', songs);
    yield put(getSongsFetchSuccess(songs));
}

function* uploadSongData(action) {
    const newSongData = action.payload;
    const newSong = yield call(api.addSongs, newSongData);
    yield put(uploadSongRequestSuccess(newSong));
}

function* deleteSong(action) {
    const songId = action.payload;
    yield call(api.deleteSong,songId);
    const updatedSongArray = yield call(api.fetchSongs);
    yield put(deleteSongRequestSuccess(updatedSongArray));
}

function* updateSong(action) {
    const newSongData = action.payload;
    yield call(api.editSongs,newSongData);
    const newSongArray = yield call(api.fetchSongs);
    yield put(updateSongsRequestSuccessful(newSongArray));
}

function* clearPlaylist(){
    yield call(api.clearPlaylist);
    const newSongArray = yield call(api.fetchSongs);
    yield put(clearPlaylistSuccessfull(newSongArray));
}



function* rootSaga() {
    yield takeEvery('songs/getSongsFetch', fetchSongsFromApi);
    yield takeEvery('songs/uploadSongRequest', uploadSongData);
    yield takeEvery('songs/deleteSongRequest', deleteSong);
    yield takeLatest('songs/updateSongsRequest', updateSong);
    yield takeEvery('songs/clearPlaylistRequest',clearPlaylist);
}

export default rootSaga;