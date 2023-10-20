import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const LoginInformation = ({ info, logOutFun }) => {
    const handalLogout = () => {
        logOutFun()
            .then(() => {
                // Sign-out successful.

                Swal.fire({
                    title: 'Error!',
                    text: 'Log out Successful',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });
            })
            .catch((error) => {
                // An error happened.
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    };

    return (
        <>
            <div className="absolute right-0 bg-gray-600/80 text-white rounded-md">
                <div className="w-fit sm:m-5 m-2 mt-4 flex flex-col items-end sm:gap-4 gap-1">
                    <ul className="sm:text-lg text-base font-medium">
                        <li className="mt-2">{info?.displayName}</li>
                        <li className="mt-2">{info?.email}</li>
                    </ul>
                    <button
                        onClick={handalLogout}
                        className="secondaryBtn rounded-md border border-white p-2
                         hover:bg-slate-400 duration-150">
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
