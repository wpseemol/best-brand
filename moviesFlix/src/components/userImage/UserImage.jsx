import PropTypes from 'prop-types';
const UserImage = ({ imgUrl }) => {
    const url = imgUrl ? imgUrl : 'https://i.ibb.co/wBfQjTy/user-Image.png';

    return (
        <>
            <div className="w-12 overflow-hidden rounded-full">
                <img
                    src={url}
                    alt="Author emails"
                    className="w-full object-cover object-center"
                />
            </div>
        </>
    );
};

export default UserImage;

UserImage.propTypes = {
    imgUrl: PropTypes.string,
};
