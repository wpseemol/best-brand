import PropTypes from 'prop-types';

const LoginInformation = ({ info, logOutFun }) => {
    const handalLogout = () => {
        logOutFun()
            .then(() => {
                // Sign-out successful.

                console.log('Log out Successful');
            })
            .catch(() => {
                // An error happened.
            });
    };

    return (
        <>
            <div className="absolute right-0 bg-gray-600/80 text-white rounded-md">
                <div className="w-fit sm:m-5 m-2 mt-4">
                    <ul className=" text-base font-medium">
                        <li className="mt-2">{info?.displayName}</li>
                        <li className="sm:my-3">{info?.email}</li>
                    </ul>
                    <button
                        onClick={handalLogout}
                        className="secondaryBtn rounded-md sm:mt-3">
                        Log Out
                    </button>
                </div>
            </div>
        </>
    );
};

export default LoginInformation;

LoginInformation.propTypes = {
    info: PropTypes.object.isRequired,
    logOutFun: PropTypes.func,
};
