import HeadingHTwo from '../headingHTwo/HeadingHTwo';

const CareerOption = ({ data }) => {
    const {
        titleMain,
        type,
        glariImageA,
        glariImageB,
        glariImageC,
        glariImageD,
        glariImageE,
        glariImageF,
    } = data[0];
    return (
        <>
            <div className="relative">
                <div className="uppercase md:ml-0 ml-2 z-20 pt-10">
                    <div className="relative overflow-hidden  mb-6">
                        <div className="ml-3">
                            <HeadingHTwo hTwo={titleMain} />
                        </div>
                        <div className="border-primaryColor border-l-4 w-1 h-[100rem] absolute top-0 left-0"></div>
                    </div>
                </div>

                <div>
                    <h4 className="text-2xl font-semibold">{type}</h4>
                </div>
                <div className="sm:flex items-center gap-4">
                    <p className="text-base font-semibold">{`Don’t see your career area listed?`}</p>
                    <button className="primaryBtn bg-primaryColor">
                        Know More
                    </button>
                </div>

                <div className="container mx-auto  py-2  lg:pt-10">
                    <div className="-m-1 md:flex flex-wrap md:-m-2">
                        <div
                            data-aos="zoom-out-right"
                            className="sm:flex md:w-1/2 flex-wrap">
                            <div className="sm:w-1/2 p-1 md:p-2 ">
                                <div className="overflow-hidden h-full w-full rounded-lg relative">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center  duration-200 hover:scale-110"
                                        src={glariImageA}
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black/10 p-2 rounded-md">
                                        <h2 className="uppercase text-2xl font-bold text-white">
                                            Digital
                                        </h2>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/10 p-2 rounded-md">
                                        <h4 className="uppercase text-base font-medium text-white">
                                            Sao Paulo Office
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 p-1 md:p-2">
                                <div className="overflow-hidden h-full w-full rounded-lg relative">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center  duration-200 hover:scale-110"
                                        src={glariImageB}
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black/10 p-2 rounded-md">
                                        <h2 className="uppercase text-2xl font-bold text-white">
                                            Finance/ <br />
                                            Accounting
                                        </h2>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/10 p-2 rounded-md">
                                        <h4 className="uppercase text-base font-medium text-white">
                                            Tokyo office
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <div className="overflow-hidden h-full w-full rounded-lg relative">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center  duration-200 hover:scale-110"
                                        src={glariImageE}
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black/10 p-2 rounded-md">
                                        <h2 className="uppercase text-2xl font-bold text-white">
                                            Data Analytics
                                        </h2>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/10 p-2 rounded-md">
                                        <h4 className="uppercase text-base font-medium text-white">
                                            Lonoon office
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-out-left"
                            className="sm:flex md:w-1/2 flex-wrap">
                            <div className="sm:w-full p-1 md:p-2">
                                <div className="overflow-hidden h-full w-full rounded-lg relative">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center  duration-200 hover:scale-110"
                                        src={glariImageF}
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black/10 p-2 rounded-md">
                                        <h2 className="uppercase text-2xl font-bold text-white">
                                            administrator
                                        </h2>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/10 p-2 rounded-md">
                                        <h4 className="uppercase text-base font-medium text-white">
                                            culver city Office
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 p-1 md:p-2">
                                <div className="overflow-hidden h-full w-full rounded-lg relative">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center  duration-200 hover:scale-110"
                                        src={glariImageD}
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black/10 p-2 rounded-md">
                                        <h2 className="uppercase text-2xl font-bold text-white">
                                            Technology
                                        </h2>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/10 p-2 rounded-md">
                                        <h4 className="uppercase text-base font-medium text-white">
                                            New York Office
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 p-1 md:p-2">
                                <div className="overflow-hidden h-full w-full rounded-lg relative">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center  duration-200 hover:scale-110"
                                        src={glariImageC}
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black/10 p-2 rounded-md">
                                        <h2 className="uppercase text-2xl font-bold text-white">
                                            Marketing
                                        </h2>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/10 p-2 rounded-md">
                                        <h4 className="uppercase text-base font-medium text-white">
                                            Sao Paulo Office
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="zoom-in-right"
                    className=" absolute -z-10 top-0 right-1/4  border-2 border-gray-600 w-screen xl:h-[35rem] sm:h-[30rem] h-[35rem]"></div>
            </div>
        </>
    );
};

export default CareerOption;
