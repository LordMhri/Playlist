import Song from '../models/song.js'


export const getAllSongs = async(req,res) =>{
    try {
        const songs = await Song.find({});
        res.json(songs);
    } catch (error) {
        console.error("Error occurred ", error );
        res.status(500).json({error: 'Failed to retrieve songs'})
    }
};

export const editSongDetails = async(req,res) => {
   try {
     const {_id,title,artist,album,duration} = req.body;
     
     const updatedSong = await Song.findByIdAndUpdate(
         _id,
         { title, artist, album, duration },
         { new: true }
     );
 
     res.status(200).json(updatedSong);
   } catch (error) {
    console.error('Error occurred ', error );
    res.status(500).json({error: 'Failed to edit song'})
    
   }
}

export const addSong = async (req,res) => {
    try {
        const {title,artist,album,duration} = req.body;

        const newSong = new Song({
            title,
            artist,
            album,
            duration
        });

        await newSong.save();
        res.status(201).json(newSong);
    } catch (error) {
        console.error('Error occurred ', error );
        res.status(500).json({error: 'Failed to add song'})
    }
}

export const deleteSong = async (req,res) => {
    try {
        const {_id} = req.body;
        await Song.findByIdAndDelete(_id);
        res.status(200).json({
            message:'Song deleted successfully'
        })
        
    } catch (error) {
        console.error('Error occurred ', error );
        res.status(500).json({error: 'Failed to delete song'})
    }
}

export const clearPlaylist  = async(req,res) => {
    try {

        await Song.deleteMany({});

        res.status(200).json({
            message : "All songs deleted"
        })
        
    } catch (error) {
        console.error('Error occurred ', error );
        res.status(500).json({error: 'Failed to Clear Playlist'})
    }
}

