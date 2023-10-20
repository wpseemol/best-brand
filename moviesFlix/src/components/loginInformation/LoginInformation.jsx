import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
            <div className="absolute z-[100] right-0 bg-gray-600/80 text-white rounded-md">
                <div className="w-fit sm:m-5 m-2 mt-4 ">
                    <div className="uppercase text-lg text-center">
                        <h2>Admin</h2>
                    </div>
                    <ul className="sm:text-lg text-base text-left font-medium flex flex-col items-end ">
                        <li className="mt-2">
                            <Link to="/upload-movies">Upload Movie</Link>
                        </li>
                        <li className="mt-1">{info?.displayName}</li>
                        <li className="mt-1">{info?.email}</li>
                        <li className="mt-1 mb-2">
                            <button
                                onClick={handalLogout}
                                className="secondaryBtn mt-3 rounded-md border border-white px-4 py-2
                         hover:bg-slate-400 duration-150">
                                Log Out
                            </button>
                        </li>
                    </ul>
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
