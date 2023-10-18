import { FaBars, FaX } from 'react-icons/fa6';

const TogolIcon = ({ isClick }) => {
    return (
        <>
            <div className="duration-300">{isClick ? <FaBars /> : <FaX />}</div>
        </>
    );
};

export default TogolIcon;
