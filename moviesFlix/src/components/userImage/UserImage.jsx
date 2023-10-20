const UserImage = ({ imgUrl }) => {
    const url = imgUrl ? imgUrl : 'https://i.ibb.co/wBfQjTy/user-Image.png';
    return (
        <>
            <div className="w-12 rounded-full">
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
