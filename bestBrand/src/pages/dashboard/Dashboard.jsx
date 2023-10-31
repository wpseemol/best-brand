import { NavLink, Outlet } from 'react-router-dom';
import Title from '../../components/title/Title';
import {
    FaAddressCard,
    FaArrowRightFromBracket,
    FaRegUser,
    FaUpload,
} from 'react-icons/fa6';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const loginRegInfo = useContext(AuthContext);
    const { logOut } = loginRegInfo || {};

    const handalLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.

                Swal.fire({
                    title: 'success!',
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
            <div>
                <Title>Dashboard</Title>
            </div>

            <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
                <div className="col-span-1">
                    <NavLink
                        to={`/dashboard/profile`}
                        className={({ isActive }) => isActive && 'active'}>
                        <div className="flex items-center  gap-2 hover:text-primaryColor duration-150 text-xl font-semibold mb-3">
                            <FaRegUser />
                            <span>Profile</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/dashboard/upload`}
                        className={({ isActive }) => isActive && 'active'}>
                        <div className="flex items-center  gap-2 hover:text-primaryColor duration-150 text-xl font-semibold mb-3">
                            <FaUpload />
                            <span>Upload Product</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/dashboard/address`}
                        className={({ isActive }) => isActive && 'active'}>
                        <div className="flex items-center  gap-2 hover:text-primaryColor duration-150 text-xl font-semibold mb-3">
                            <FaAddressCard />
                            <span>Address</span>
                        </div>
                    </NavLink>
                    <div onClick={handalLogout}>
                        <div className="flex items-center  gap-2 hover:text-primaryColor duration-150 text-xl font-semibold mb-3">
                            <FaArrowRightFromBracket />
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 mb-10">
                    {' '}
                    <Outlet />{' '}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
