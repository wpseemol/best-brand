import { FaBars, FaX } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const TogolIcon = ({ isClick }) => {
    return (
        <>
            <div className="duration-300">{isClick ? <FaBars /> : <FaX />}</div>
        </>
    );
};

export default TogolIcon;

TogolIcon.propTypes = {
    isClick: PropTypes.bool,
};
