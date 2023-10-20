const UserImage = ({ imgUrl, usDbImg }) => {
    const url = imgUrl
        ? imgUrl
        : usDbImg
        ? usDbImg
        : 'https://i.ibb.co/wBfQjTy/user-Image.png';

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
