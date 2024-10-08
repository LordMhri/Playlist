
const API_URL =  'https://vercel-backend-vert.vercel.app/api'
const api = {


    addSongs : async (song) => {
        //dont forget to add the song as a parameter for this function
        const response = await fetch(`${API_URL}/add-song`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(song),
        });
        if (!response.ok) {
            throw new Error(`Error: response status ${response.status}`);
        }
        const data = await response.json();
        return data;
    },

    fetchSongs: async () => {
        const response  = await fetch(`${API_URL}/fetch-songs`);

        if (!response.ok) {

        return new Error(`Error: response status ${response.status}`);

            }
        const data = await response.json();

        console.log(data);

        return data; 
    },
    editSongs : async(newSong) => {
        //TODO : add song as a parameter to make it reusable
        const response = await fetch(`${API_URL}/edit-song`,
            {
                method : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(newSong)
            }
        );

        if(!response.ok){
            throw new Error(`Error: response status ${response.status}`);
        }
        const data = await response.json();
        return data;
    },
    deleteSong : async(id) => {

        const response = await fetch(`${API_URL}/delete-song`, {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(id)
        });

        if (!response.ok) {
            throw new Error(`Error : response status ${response.status}`);
        }

        const data = await response.json();
        return data;
    },  
    clearPlaylist : async() => {
        const response = await fetch(`${API_URL}/clear-playlist`,{
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error : response status ${response.status}`);
        }

        const data = await response.json();
        return data;

    }

}

export default api;