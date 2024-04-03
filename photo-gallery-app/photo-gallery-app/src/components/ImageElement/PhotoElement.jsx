import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './PhotoElement.css';

const PhotoElement = ({ photoId }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/photo/${photoId}`)}>
            <img className="fixed-size-photo" src={`http://localhost:3000/api/photo/${photoId}`} />
        </div>
    );
};

PhotoElement.propTypes - {
    photoId: PropTypes.object.isRequired
}

export default PhotoElement;