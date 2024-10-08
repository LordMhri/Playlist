# Playlist App
## Overview
The Playlist App is a web application built using the MERN stack (MongoDB, Express, React, Node.js) 
that allows users to create, read, update, and delete songs in a playlist. 
The application also utilizes **`styled-components`** for styling, and  **`redux`** 
with **`redux-saga`** for state management.


## Features
* **Create**: Add new songs to your playlist.
* **Read**: View a list of all songs in the playlist.
* **Update**: Edit details of existing songs.
* **Delete**: Remove songs from the playlist.

  
## Technologies Used
* **MongoDb** : NOSQL database to store song data.
* **Express** : Web application framework for Node.js to handle API routes.
* **React**: Frontend library to build the user interface.
* **Node.js**: JavaScript runtime environment to run the server-side code.
* **Vite** : Build tool for the React frontend.
* **Styled-Components**: Library for styling React components using tagged template literals.
* **Redux**: State management library for managing the app’s global state.
* **Redux-Saga** : Middleware for managing side effects in Redux, such as API calls.

## Installation
### Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/MeheretAl/SongApp.git
   cd songApp
   ```
2. **Install Backend Dependencies**
   ```bash
    cd backend
    npm install
   ```
3. **Setup Environment Variables**
   Create a .env file in the backend directory and add your MongoDB connection string:
   ```bash
    MONGODB_URI=mongodb://localhost:27017/playlist
    PORT=5000
   ```
4. **Install Frontend Variables**
   Navigate to the frontend directory and install dependencies:
   ```bash
    cd ../frontend
    npm install
   ```
5. **Run the Application**
    * **Start the Backend Server**
      ```bash
      cd ../backend
      npm start
      ```
  
    * **Start the Frontend Development Server**
       ```bash
       cd ../frontend
       npm run dev
       ```

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull
request. You can also open issues for bugs or feature requests.
