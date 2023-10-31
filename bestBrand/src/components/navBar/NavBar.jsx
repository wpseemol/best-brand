import { FaBars, FaMagnifyingGlass, FaRegUser, FaX } from 'react-icons/fa6';
import {
    about,
    card,
    contact,
    logo,
    offer,
    products,
    search,
} from '../navElement/NavElement';
import { useContext, useState } from 'react';
import '../../assets/css/hover.css';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [clickSerce, setClickSerce] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    const account = (
        <li className="text-white">
            {' '}
            <Link to={user ? '/dashboard' : '/login'}>
                <div className="flex md:flex-row flex-col items-center sm:gap-3 gap-1">
                    <div className="text-primaryColor text-3xl">
                        <FaRegUser />
                    </div>
                    <div>
                        <h2 className="sm:text-lg text-sm font-semibold">
                            Account
                        </h2>
                        {user ? (
                            <p className="text-sm hidden md:block">
                                {user?.email}
                            </p>
                        ) : (
                            <p className="text-sm hidden md:block">
                                register or Login
                            </p>
                        )}
                    </div>
                </div>
            </Link>{' '}
        </li>
    );

    return (
        <>
            <nav className="hidden md:block">
                <div>
                    <div className="bg-black py-2 fixed top-0 left-0 w-full ">
                        <ul className="container mx-auto flex justify-evenly items-center">
                            {/* logo */ logo}
                            <li>{/* search */ search}</li>

                            {/* offer */ offer}

                            {/* card */ card}

                            {/* account */ account}
                        </ul>
                    </div>
                    <div className="hidden md:block h-[6rem] w-full"></div>
                </div>
                <div className="shadow-lg">
                    <ul className="container mx-auto text-base font-medium py-2 flex items-center gap-5">
                        {products}
                        {contact}
                        {about}
                    </ul>
                </div>
            </nav>

            <nav className="md:hidden">
                <div>
                    <ul className=" flex justify-between items-center bg-black w-full fixed top-0 px-8">
                        <li className={`relative `}>
                            <div
                                className=" text-white text-2xl"
                                onClick={() => setMenuShow(!menuShow)}>
                                {menuShow ? <FaX /> : <FaBars />}
                            </div>
                            <ul
                                className={`absolute top-[3.25rem]  h-44 bg-white duration-500 ${
                                    menuShow
                                        ? '-left-[1.8rem]'
                                        : '-left-[20rem]'
                                }`}>
                                <li className="hover:text-primaryColor duration-200 border-b p-2 pr-36">
                                    {products}
                                </li>
                                <li className="hover:text-primaryColor duration-200 border-b p-2 pr-16">
                                    {contact}
                                </li>
                                <li className="hover:text-primaryColor duration-200 p-2 pr-16">
                                    {about}
                                </li>
                            </ul>
                        </li>

                        {logo}
                        <li className="">
                            <div
                                className={`text-primaryColor text-2xl  ${
                                    menuShow && 'opacity-25'
                                }`}
                                onClick={() =>
                                    !menuShow && setClickSerce(!clickSerce)
                                }>
                                <FaMagnifyingGlass />
                            </div>
                            {clickSerce && (
                                <>
                                    <div
                                        onClick={() =>
                                            setClickSerce(!clickSerce)
                                        }
                                        className="absolute top-0 left-0 w-full h-screen bg-black/25 flex justify-center"></div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                                        {search}
                                    </div>
                                </>
                            )}
                        </li>
                    </ul>
                    <div className="w-ful h-[5rem]"> </div>
                </div>
                <div>
                    <ul className="fixed bottom-0 z-40 bg-black py-2 flex w-full justify-evenly">
                        {/* offer */ offer}

                        {/* card */ card}

                        {/* account */ account}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
