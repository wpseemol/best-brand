import { Link, useLoaderData } from 'react-router-dom';
import '../../assets/css/hover.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import HeadingHTwo from '../headingHTwo/HeadingHTwo';
import { FaPencil } from 'react-icons/fa6';
import PutItem from '../putItem/PutItem';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MoviesSingle = () => {
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    const { data } = useLoaderData();
    const {
        bnarImgUrl,
        name,
        picUrl,
        comingSoon,
        releaseYear,
        type,
        description,
        storyBy,
        producedBy,
        executiveProducers,
        cast,
        _id,
    } = data || {};

    const allData = {
        bnarImgUrl,
        name,
        picUrl,
        comingSoon,
        releaseYear,
        type,
        description,
        storyBy,
        producedBy,
        executiveProducers,
        cast,
        _id,
    };

    const [isMatchData, setIsMatchData] = useState(null);
    const [btnDisable, setBtnDisable] = useState(false);
    const [editText, setEditText] = useState(null);
    const [showEditFrom, setShowEditFrom] = useState(false);

    const popupClose = (isClose) => {
        setShowEditFrom(isClose);
    };

    useEffect(() => {
        axios
            .get('http://localhost:5000/watching-late')
            .then(function (response) {
                const { data } = response;
                const isMatch = data.find((element) => {
                    return element.wlId === _id;
                });

                setIsMatchData(isMatch);
            })
            .catch(function (error) {
                // handle error
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    }, []);

    const hundalWasingLate = () => {
        if (isMatchData) {
            Swal.fire({
                title: 'Error!',
                text: 'Previously sent it this item',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
        } else {
            axios
                .post('http://localhost:5000/watching-late', {
                    wlId: _id,
                    name: name,
                    picUrl: picUrl,
                    comingSoon: comingSoon,
                    description: description,
                    type: type,
                })
                .then(() => {
                    Swal.fire({
                        title: 'Successful!',
                        text: 'Successful to set on Watching Late List',
                        icon: 'success',
                        confirmButtonText: 'Okay',
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    });
                });
        }
    };

    return (
        <>
            <div className=" relative overflow-hidden">
                <div
                    className="bg-fixed lg:bg-cover bg-contain overflow-auto bg-no-repeat lg:h-[40rem] md:h-[35rem] h-[20rem]  flex pl-20 lg:items-center"
                    style={{
                        backgroundImage: `url(${bnarImgUrl})`,
                    }}>
                    <div className="p-2 py-5 sm:py-12 md:py-0 sm:pt-10 lg:pt-0 sm:text-white  md:block flex justify-between gap-4 items-center sm:mr-8 mt-10 sm:mt-0">
                        <div>
                            <div>
                                <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl uppercase font-bold">
                                    {' '}
                                    {name}{' '}
                                </h2>
                            </div>
                            <div className="sm:text-xl font-semibold sm:my-3">
                                <p>Available Now on MoviesFlix</p>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                {' '}
                                <button
                                    onClick={() => {
                                        hundalWasingLate();
                                        setBtnDisable(true);
                                    }}
                                    disabled={btnDisable}
                                    className="seconderBtn disabled:bg-red-700/75 bg-primaryColor/40 sm:py-3 sm:px-4 sm:p-0 p-2 text-white font-bold">
                                    Watching Late{' '}
                                </button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myContainer md:mt-20 mt-16 px-2 sm:px-0">
                    <div>
                        <div className="relative overflow-hidden  mb-6">
                            <div className="ml-3">
                                <HeadingHTwo hTwo={'About'} />
                            </div>
                            <div className="border-primaryColor border-l-4 w-1 h-[100rem] absolute top-0 left-0"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="text-3xl font-bold relative duration-200 hover:border border-primaryColor  eidetItem">
                            <div className="w-full overflow-hidden">
                                <img
                                    src={picUrl}
                                    alt={name}
                                    className="w-full object-cover object-center"
                                />
                            </div>
                            <div className="text-center text-xl font-bold mt-6">
                                <p>{comingSoon} </p>
                            </div>
                            <div className="">
                                <div>
                                    {' '}
                                    <button
                                        onClick={() => {
                                            hundalWasingLate();
                                            setBtnDisable(true);
                                        }}
                                        disabled={btnDisable}
                                        className="seconderBtn bg-primaryColor hover:bg-primaryColor/80 sm:py-3 sm:px-4 sm:p-0 p-2 disabled:bg-red-700/75 text-white font-bold ">
                                        Watching Late{' '}
                                    </button>{' '}
                                </div>
                            </div>
                            {/* edit icon */}
                            {user && (
                                <div
                                    onClick={() => {
                                        setEditText({ picUrl: picUrl });
                                        setShowEditFrom(true);
                                    }}
                                    className="hidden overflow-hidden absolute -top-6 -right-6 bg-primaryColor
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                    <FaPencil />
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="text-xl font-semibold">
                                <div className="text-3xl font-bold relative duration-200 hover:border border-primaryColor  eidetItem">
                                    <h2> {name} </h2>
                                    {user && (
                                        <div
                                            onClick={() => {
                                                setEditText({ name: name });
                                                setShowEditFrom(true);
                                            }}
                                            className="hidden overflow-hidden absolute -top-6 -right-6 bg-primaryColor
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                            <FaPencil />
                                        </div>
                                    )}
                                </div>
                                <div className="text-base ">
                                    <p>
                                        <span>{releaseYear} </span>|
                                        <span>{type}</span>{' '}
                                    </p>
                                </div>

                                <div className="  relative duration-200 hover:border border-primaryColor  eidetItem">
                                    <p className="text-xl">{description}</p>
                                    {user && (
                                        <div
                                            onClick={() => {
                                                setEditText({
                                                    description: description,
                                                });
                                                setShowEditFrom(true);
                                            }}
                                            className="hidden overflow-hidden absolute -top-6 -right-6 bg-primaryColor
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                            <FaPencil />
                                        </div>
                                    )}
                                </div>

                                <br />
                                {storyBy && (
                                    <div className="  relative duration-200 hover:border border-primaryColor  eidetItem">
                                        <h2 className="text-2xl font-bold">
                                            DIRECTED BY
                                        </h2>
                                        <p>{storyBy}</p>

                                        {user && (
                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        storyBy: storyBy,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="hidden overflow-hidden absolute -top-6 -right-6 bg-primaryColor
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        )}
                                    </div>
                                )}

                                <br />
                                {producedBy && (
                                    <div className="  relative duration-200 hover:border border-primaryColor  eidetItem">
                                        <h2 className="text-2xl font-bold">
                                            PRODUCED BY
                                        </h2>
                                        <p>{producedBy}</p>
                                        {user && (
                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        producedBy: producedBy,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="hidden overflow-hidden absolute -top-6 -right-6 bg-primaryColor
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        )}
                                    </div>
                                )}

                                <br />
                                {executiveProducers && (
                                    <div className="  relative duration-200 hover:border border-primaryColor  eidetItem">
                                        <h2 className="text-2xl font-bold">
                                            EXECUTIVE PRODUCERS
                                        </h2>
                                        <p>{executiveProducers}</p>
                                        {user && (
                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        executiveProducers:
                                                            executiveProducers,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="hidden overflow-hidden absolute -top-6 -right-6 bg-primaryColor
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        )}
                                    </div>
                                )}

                                <br />
                                {cast && (
                                    <div className="  relative duration-200 hover:border border-primaryColor  eidetItem">
                                        <h2 className="text-2xl font-bold">
                                            CAST
                                        </h2>
                                        <p>{cast}</p>
                                        {user && (
                                            <div
                                                onClick={() => {
                                                    setEditText({ cast: cast });
                                                    setShowEditFrom(true);
                                                }}
                                                className="hidden overflow-hidden absolute -top-6 -right-6 bg-primaryColor
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* pope show here  */}
                <div className={showEditFrom ? 'block' : 'hidden'}>
                    <PutItem
                        allData={allData}
                        clickText={editText}
                        popupClose={popupClose}
                    />
                </div>
            </div>
            <div className="bg-[#a01e14] py-24 md:mt-20 mt-16">
                <div className="flex justify-center items-center text-center">
                    <div className="text-white">
                        <div className="xl:text-6xl md:text-4xl text-2xl font-bold">
                            <h2>BECOME A FAN</h2>
                        </div>
                        <div className="text-xl font-semibold my-2">
                            <p>
                                Subscribe Now to our newsletters and get updates
                                <br />
                                from Sony Pictures delivered right to your
                                inbox.
                            </p>
                        </div>
                        <div>
                            <button className="seconderBtn border-none bg-black hover:bg-black/50 focus:bg-black/60 active:bg-black/40 rounded-none text-xl font-semibold text-white">
                                <Link to="/register">
                                    Sign Up <br /> Now
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoviesSingle;
