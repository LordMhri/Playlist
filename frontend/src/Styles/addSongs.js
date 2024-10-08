import styled from "@emotion/styled/macro";

export const HeadingStyle = styled.h1`
    color:blue,    
`

export const AddSongs = styled.div`
    
div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

div h1 {
    color: #FFFFFF;
    font-size: 24px;
}

div button.upload {
    background-color: #3A3A4A;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

div button.upload:hover {
    background-color: #575766;
}
`

export const AddButton = styled.div`
    background-color: #6200ea;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #3700b3;
  }
`