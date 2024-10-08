import styled from 'styled-components';


const Alert = styled.div`
    background-color: ${(props) => (props.variant === 'loading' ? '#2f313b' : '#21202b')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

export default Alert;
