import React from "react";
import { Link, useParams } from "react-router-dom";
import { StyledTable, GlobalStyle, AddSongs, StyledContainer } from "../Styles/Styling.js";
import TableContent from "../Components/TableContent.jsx";

const MainPage = ({ songs}) => {
  return (

   
    <>
      <GlobalStyle />
      <StyledContainer>
        <AddSongs>
          <h1>All Songs</h1>
          <Link to="/upload">
            <button>Upload</button>
          </Link>
          <Link to="/clear-playlist">
            <button>Clear Playlist</button>
          </Link>
        </AddSongs>
        <div style={{ overflow: 'auto', padding: '5px' }}>
          <StyledTable>
            <TableContent songs={songs} />
          </StyledTable>
        </div>
      </StyledContainer>
    </>
  );
};

export default MainPage;
