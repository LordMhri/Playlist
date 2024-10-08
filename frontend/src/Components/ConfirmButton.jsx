import styled from "styled-components";

const ConfirmButton = styled.button`
    background-color: ${(props) => (props.variant === 'confirm' ? '#f00' : '#ccc')};
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        transition: transform 0.3s;
    }
`;


export default ConfirmButton;