import PropTypes from 'prop-types';
const DescriptionPe = ({ disPe }) => {
    return (
        <>
            <p className="text-lg font-medium">{disPe}</p>
        </>
    );
};

export default DescriptionPe;

DescriptionPe.propTypes = {
    disPe: PropTypes.string.isRequired,
};
