import styled,{createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    
    body {
    margin: 0;
    background-color: #111219;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;  
    font-family: 'Arial', sans-serif;
    color: beige;
  }
`

export const StyledContainer = styled.div`
  width: 100%;
  margin-top: 5vh;
  background-color: #111219;
`;

export const TextInput = styled.input`
  background-color: #575766;
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 100%;
`

export const StyledButton = styled.button`
  background-color: ${(props) => props.variant  === 'Upload' ? 'skyblue' : 'brown'};
  width: 100%;
  margin-top: 20px; 
  height: 30px;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.variant === 'Upload' ? 'blue' : 'grey'};
  }
`

export const StyledHeader = styled.h4`
  text-align: left;

`


export const AddSongs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:10px;
    margin-bottom: 20px;

    h1{
      color: #FFFFFF;
      font-size: 24px;
    }

    

    button{
      background-color: #3A3A4A;
      color: #FFFFFF;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    button:hover{
      background-color: #575766;
    }
`

export const StyledTable = styled.table`
    width: 100%;
    border:1px solid grey;
    border-radius: 6px;
    border-collapse: collapse;

  th, td {
    padding:10px;
    padding-left:15px;
    padding-right:35px;
    text-align: left;
    color: #c1c1cb;
  }

  
  th {
    background-color: #292B3A;
    color: #FFFFFF;
    font-weight: bold;
  }

  
  th:last-child{
    text-align: center;
  }

  tr {
    background-color: #1C1C24;
    border-bottom: 1px solid #62636b;
  }

  tr:last-child {
    border-bottom: none;
  }

  tr:hover {
    background-color: #2C2C3A;
  }

  td {
    vertical-align: middle;
  }

  button {
    cursor:pointer;
    margin: 4px;
    padding: 10px;
    margin-right: 10px;
  }

  button.delete-button:hover {
    background-color: red;
    border: none;
    transition: 0.3s;
    transform: scale(1.2);
    border-radius: 6px;
}

button.edit-button:hover {
    background-color: aqua;
    border: none;
    border-radius: 6px;
    transition: 0.3s;
    transform: scale(1.2);
    margin: 0;
}



`;


