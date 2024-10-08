import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TableContent = ({songs}) => {
  // const dispatch = useDispatch();
  

  // const songs = useSelector((state) => state.firstReducer.songs);

  // useEffect(() => {
  //   dispatch({ type: "GET_SONGS_FETCH" });
  // }, [dispatch]);

  if (!songs || songs.length === 0) {
    return <div>No songs available</div>;
  }

  return (
    <>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Duration</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song._id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.duration}</td>
            <td>
              <Link to={`/delete/${song._id}`}>
                <button className="delete-button">Delete</button>
              </Link>
              <Link to={`/edit/${song._id}`}>
                <button className="edit-button">Edit</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableContent;
