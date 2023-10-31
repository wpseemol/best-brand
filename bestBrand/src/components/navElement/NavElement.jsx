import {
    FaCartFlatbed,
    FaDollarSign,
    FaMagnifyingGlass,
    FaRegUser,
} from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
// site logo
const logo = (
    <>
        <li className="text-white">
            <Link to="/">
                <div className="w-20">
                    <img
                        src="https://i.ibb.co/pL8pdBm/best-Brand-logos-transparent.png"
                        alt="Site logo"
                        className="w-full object-cover hover:scale-125 duration-300"
                    />
                </div>
            </Link>
        </li>
    </>
);

//search section
const search = (
    <div className=" 2xl:w-[25rem] xl:w-[22rem] md:w-[18rem] sm:w-[22rem] w-[16rem] md:mt-0 mt-6  relative">
        <input
            type="text"
            name="search"
            id="searchIcon"
            className="w-full text-gray-600 py-2 pl-3 rounded-md font-semibold outline-none"
            placeholder="Search"
        />
        <div className="absolute top-2 z-10 right-3 text-primaryColo text-2xl hidden sm:block">
            <FaMagnifyingGlass />
        </div>
    </div>
);

const offer = (
    <li className="text-white">
        {' '}
        <Link>
            <div className="flex items-center sm:gap-3">
                <div className="text-primaryColo text-3xl">
                    <FaDollarSign />
                </div>
                <div>
                    <h2 className="sm:text-lg text-sm font-semibold">Offers</h2>
                    <p className="text-sm hidden md:block">Latest Offers</p>
                </div>
            </div>
        </Link>{' '}
    </li>
);

const card = (
    <li className="text-white">
        {' '}
        <Link>
            <div className="flex items-center sm:gap-3 gap-1">
                <div className="text-primaryColo text-3xl">
                    <FaCartFlatbed />
                </div>
                <div>
                    <h2 className="sm:text-lg text-sm font-semibold">
                        Cart<span>(0)</span>
                    </h2>
                    <p className="text-sm hidden md:block">Add items</p>
                </div>
            </div>
        </Link>{' '}
    </li>
);
const account = (
    <li className="text-white">
        {' '}
        <Link>
            <div className="flex items-center sm:gap-3 gap-1">
                <div className="text-primaryColo text-3xl">
                    <FaRegUser />
                </div>
                <div>
                    <h2 className="sm:text-lg text-sm font-semibold">
                        Account
                    </h2>
                    <p className="text-sm hidden md:block">register or Login</p>
                </div>
            </div>
        </Link>{' '}
    </li>
);

const products = <NavLink>Products </NavLink>;
const contact = <NavLink>Contact </NavLink>;
const about = <NavLink>about </NavLink>;

export { logo, search, offer, card, account, products, contact, about };
