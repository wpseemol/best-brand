import { FaBars, FaMagnifyingGlass, FaX } from 'react-icons/fa6';
import {
    about,
    account,
    card,
    contact,
    logo,
    offer,
    products,
    search,
} from '../navElement/NavElement';
import { useState } from 'react';
import '../../assets/css/hover.css';

const NavBar = () => {
    const [clickSerce, setClickSerce] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

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
                <ul className=" flex justify-between items-center bg-black w-full fixed top-0 px-8">
                    <li className={`relative `}>
                        <div
                            className=" text-white text-2xl"
                            onClick={() => setMenuShow(!menuShow)}>
                            {menuShow ? <FaX /> : <FaBars />}
                        </div>
                        <ul
                            className={`absolute top-[3.25rem]  h-44 bg-white duration-500 ${
                                menuShow ? '-left-[1.8rem]' : '-left-[20rem]'
                            }`}>
                            <li className="hover:text-primaryColo duration-200 border-b p-2 pr-36">
                                {products}
                            </li>
                            <li className="hover:text-primaryColo duration-200 border-b p-2 pr-16">
                                {contact}
                            </li>
                            <li className="hover:text-primaryColo duration-200 p-2 pr-16">
                                {about}
                            </li>
                        </ul>
                    </li>

                    {logo}
                    <li className="">
                        <div
                            className={`text-primaryColo text-2xl  ${
                                menuShow && 'opacity-25'
                            }`}
                            onClick={() =>
                                menuShow || setClickSerce(!clickSerce)
                            }>
                            <FaMagnifyingGlass />
                        </div>
                        {clickSerce && (
                            <>
                                <div
                                    onClick={() => setClickSerce(!clickSerce)}
                                    className="absolute top-0 left-0 w-full h-screen bg-black/25 flex justify-center"></div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                                    <div className=" sm:w-[20rem] w-[16rem] mt-6 relative">
                                        <input
                                            type="text"
                                            name="search"
                                            id="searchIcon"
                                            className="w-full text-gray-600 py-2 pl-3 rounded-md font-semibold outline-none"
                                            placeholder="Search"
                                            autoFocus
                                        />
                                        <div className="absolute top-2 z-10 right-3 text-primaryColo text-2xl hidden sm:block">
                                            <FaMagnifyingGlass />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </li>
                </ul>
                <ul className="fixed bottom-0 bg-black py-2 flex w-full justify-evenly">
                    {/* offer */ offer}

                    {/* card */ card}

                    {/* account */ account}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
