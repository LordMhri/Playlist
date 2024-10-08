import { useDispatch } from "react-redux";
import { clearPlaylistRequest } from "../redux/songSlice";
import { useNavigate, Link} from "react-router-dom";
import Alert from "../Components/Alert";
import ConfirmBox from "../Components/ConfirmBox";
import ConfirmButton from "../Components/ConfirmButton";
import ButtonContainer from "../Components/ButtonContainer";

const ClearPlaylist = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClearPlaylist = async () => {
            await dispatch(clearPlaylistRequest())
            navigate('/');
    };

    return (
        <>
            <Alert />
            <ConfirmBox>
                <h3>Are you sure you want to clear your playlist?</h3>
                <ButtonContainer>
                    <ConfirmButton variant='confirm' onClick={handleClearPlaylist }>Yes</ConfirmButton>
                    <Link to="/">
                        <ConfirmButton>No</ConfirmButton>
                    </Link>
                </ButtonContainer>
            </ConfirmBox>
        </>
    );
};

export default ClearPlaylist;