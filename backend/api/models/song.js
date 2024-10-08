import mongoose from "mongoose";

const SongSchema = mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    duration: { type: String, required: true },
})

const song = mongoose.model("songs",SongSchema);

export default song;