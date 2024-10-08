import express from 'express';
import { getAllSongs,editSongDetails,addSong,deleteSong,clearPlaylist } from '../controllers/songController.js';

const router =  express.Router();

router.get('/fetch-songs',getAllSongs);
router.post('/add-song',addSong);
router.put('/edit-song',editSongDetails);
router.delete('/delete-song',deleteSong);
router.delete('/clear-playlist',clearPlaylist);


export default router;