import { useLoaderData } from 'react-router-dom';
import HeadingHTwo from '../headingHTwo/HeadingHTwo';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MoviesSingle = () => {
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

    const [isMatchData, setIsMatchData] = useState(null);

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
            <div className="px-2">
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
                        <div className="flex sm:flex-row flex-col sm:gap-4 gap-1 items-center">
                            <div className="">
                                {' '}
                                <button className="seconderBtn bg-primaryColor/40 sm:py-3 sm:px-4 sm:p-0 p-2 text-white font-bold">
                                    Watch Trailer{' '}
                                </button>{' '}
                            </div>
                            <div>
                                {' '}
                                <button
                                    onClick={hundalWasingLate}
                                    className="seconderBtn bg-primaryColor/40 sm:py-3 sm:px-4 sm:p-0 p-2 text-white font-bold">
                                    Watching Late{' '}
                                </button>{' '}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="myContainer md:mt-20 mt-16">
                    <div>
                        <div className="relative overflow-hidden  mb-6">
                            <div className="ml-3">
                                <HeadingHTwo hTwo={'About'} />
                            </div>
                            <div className="border-primaryColor border-l-4 w-1 h-[100rem] absolute top-0 left-0"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div>
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
                            <div className="flex  flex-col sm:gap-4 gap-1 items-center ">
                                <div className="">
                                    {' '}
                                    <button className="seconderBtn bg-primaryColor hover:bg-primaryColor/80 sm:py-3 sm:px-4 sm:p-0 p-2 text-white font-bold">
                                        Watch Trailer{' '}
                                    </button>{' '}
                                </div>
                                <div>
                                    {' '}
                                    <button
                                        onClick={hundalWasingLate}
                                        className="seconderBtn bg-primaryColor hover:bg-primaryColor/80 sm:py-3 sm:px-4 sm:p-0 p-2 text-white font-bold">
                                        Watching Late{' '}
                                    </button>{' '}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-semibold">
                                <div className="text-3xl font-bold ">
                                    <h2> {name} </h2>
                                </div>
                                <div className="text-base ">
                                    <p>
                                        <span>{releaseYear} </span>|
                                        <span>{type}</span>{' '}
                                    </p>
                                </div>

                                <div>
                                    <p>{description}</p>
                                </div>
                                <br />
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        DIRECTED BY
                                    </h2>
                                    <p>{storyBy}</p>
                                </div>
                                <br />
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        PRODUCED BY
                                    </h2>
                                    <p>{producedBy}</p>
                                </div>
                                <br />
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        EXECUTIVE PRODUCERS
                                    </h2>
                                    <p>{executiveProducers}</p>
                                </div>
                                <br />
                                <div>
                                    <h2 className="text-2xl font-bold">CAST</h2>
                                    <p>{cast}</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                from Sony Pictures delivered right to your
                                inbox.
                            </p>
                        </div>
                        <div>
                            <button className="seconderBtn border-none bg-black hover:bg-black/50 focus:bg-black/60 active:bg-black/40 rounded-none text-xl font-semibold text-white">
                                Sign Up <br /> Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoviesSingle;
