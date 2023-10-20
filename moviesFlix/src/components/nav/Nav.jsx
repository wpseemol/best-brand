import axios from 'axios';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, NavLink } from 'react-router-dom';
import TogolIcon from '../togolIcon/TogolIcon';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import LodingIcon from '../LodingIcon/LodingIcon';
import UserImage from '../userImage/UserImage';
import '../../assets/css/hover.css';
import LoginInformation from '../loginInformation/LoginInformation';

const Nav = () => {
    const loginRegInfo = useContext(AuthContext);
    const { user, loading, logOut } = loginRegInfo || {};

    const [navBar, setNavBar] = useState(null);
    const [click, setClick] = useState(true);
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });

        axios
            .get('http://localhost:5000/header')
            .then(function (response) {
                setNavBar(response?.data);
            })
            .catch(function (error) {
                // console.log(error);
            });
    }, []);

    return (
        <>
            <section className=" flex justify-between items-center bg-black/30 xl:px-16 lg:px-10 sm:px-6 px-2 relative py-2">
                <div className="flex items-center sm:gap-5 gap-1 duration-300">
                    <div
                        onClick={() => {
                            setClick(!click);
                        }}
                        className="lg:hidden text-2xl text-primaryColor">
                        <TogolIcon isClick={click} />{' '}
                        {/* TogolIcon come from "../../components/togolIcon/TogolIcon.jsx"  */}
                    </div>
                    <div className="md:w-[12rem] w-40 " data-aos="zoom-in-up">
                        <Link to="/">
                            <img src={navBar?.resultIcon[2]?.url} alt="" />
                        </Link>
                    </div>
                </div>

                <div
                    className={`${
                        click ||
                        'absolute  md:top-[4.5rem] top-16 left-0 w-full'
                    }`}>
                    <ul
                        className={`relative lg:block text-lg font-semibold text-white ${
                            click ? 'hidden' : 'block w-full'
                        }`}>
                        <div
                            className={`flex gap-3 ${
                                click
                                    ? ' items-center justify-center'
                                    : 'flex-col bg-primaryColor/50 justify-start'
                            }`}>
                            {navBar?.resultNav.map((element, inx) => {
                                return (
                                    <li
                                        key={`navKey-${inx}`}
                                        className="lg:border-none border-b-2 pl-5 border-primaryColor ">
                                        {' '}
                                        <NavLink
                                            to={element?.link || '#'}
                                            className={`hover:active ${({
                                                isActive,
                                                isPending,
                                            }) =>
                                                isPending
                                                    ? 'pending'
                                                    : isActive
                                                    ? 'active'
                                                    : ''}`}>
                                            {element.nav}
                                        </NavLink>{' '}
                                    </li>
                                );
                            })}

                            {loading ? (
                                <LodingIcon />
                            ) : user ? (
                                <div className="relative duration-300 abaterImageHover">
                                    <UserImage imgUrl={user?.photoURL} />
                                    <div className="hidden hover:block duration-300 loginInformationShow">
                                        <LoginInformation
                                            info={user}
                                            logOutFun={logOut}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <li className="primaryBtn bg-primaryColor w-[6rem] text-center">
                                    <NavLink to="/login">
                                        <span>Sign In</span>
                                    </NavLink>
                                </li>
                            )}
                        </div>
                    </ul>
                </div>

                <div className="lg:hidden" data-aos="zoom-in-left">
                    <ul className="relative lg:block text-xl font-bold text-white">
                        {loading ? (
                            <LodingIcon />
                        ) : user ? (
                            <div className="relative duration-300 abaterImageHover">
                                <UserImage imgUrl={user?.photoURL} />
                                <div className="hidden hover:block duration-300 loginInformationShow">
                                    <LoginInformation
                                        info={user}
                                        logOutFun={logOut}
                                    />
                                </div>
                            </div>
                        ) : (
                            <li className="primaryBtn bg-primaryColor w-[6rem] text-center">
                                <NavLink to="/login">
                                    <span>Sign In</span>
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Nav;
