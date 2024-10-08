import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSongRequest } from '../redux/songSlice';
import Alert from '../Components/Alert';
import ConfirmButton from '../Components/ConfirmButton';
import ConfirmBox from '../Components/ConfirmBox';
import ButtonContainer from '../Components/ButtonContainer';



const DeleteConfirmation = () => {
    const { songId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = async () => {
        if (songId && typeof songId === 'string' && songId.trim().length > 0) {
            const _id = {
                _id : songId,
            }
            console.log(`passed ${_id}`);
            await dispatch(deleteSongRequest(_id));
            navigate('/');
        } else {
            alert("Invalid song ID.");
            navigate('/');
        }
    };

    return (
        <>
            <Alert />
            <ConfirmBox>
                <h3>Are you sure you want to delete this song?</h3>
                <ButtonContainer>
                    <ConfirmButton variant='confirm' onClick={handleDelete}>Yes</ConfirmButton>
                    <Link to="/">
                        <ConfirmButton>No</ConfirmButton>
                    </Link>
                </ButtonContainer>
            </ConfirmBox>
        </>
    );
};

export default DeleteConfirmation;

