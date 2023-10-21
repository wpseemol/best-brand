import HeadingHTwo from '../headingHTwo/HeadingHTwo';
import PropTypes from 'prop-types';

const PopularShows = ({ data }) => {
    const title = 'NEW AT SONY PICTURES';
    return (
        <>
            <div className="md:mb-16 mb-10 px-3 sm:px-0">
                <div className="relative overflow-hidden  mb-6">
                    <div className="ml-3">
                        <HeadingHTwo hTwo={title} />
                    </div>
                    <div className="border-primaryColor border-l-4 w-1 h-[100rem] absolute top-0 left-0"></div>
                </div>
                <h4 className="text-xl font-semibold">
                    See All: Movies | TV | Games
                </h4>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-3 px-2 sm:px-0">
                <div className="col-span-3 ">
                    <div className="sm:grid grid-row-3 grid-flow-col gap-3 ">
                        <div className="row-span-2 col-span-2  overflow-hidden">
                            <div className=" w-full h-full">
                                <div className="w-full xl:h-[27.7rem]   overflow-hidden ">
                                    <img
                                        src={data[0]?.imageUrl}
                                        alt={data[0]?.title}
                                        className="w-full  object-cover object-center"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold">
                                    {' '}
                                    {data[0]?.title}{' '}
                                </h2>
                                <h4 className="text-xl font-semibold">
                                    {' '}
                                    {data[0]?.where}{' '}
                                </h4>
                            </div>
                        </div>
                        <div className="row-span-1 col-span-1  ">
                            <div className="xl:h-fit lg:h-[10rem] md:h-[5.8rem]">
                                <div className="w-full h-full">
                                    <img
                                        src={data[1]?.imageUrl}
                                        alt={data[1]?.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold">
                                    {' '}
                                    {data[1]?.title}{' '}
                                </h2>
                                <h4 className="text-xl font-semibold">
                                    {' '}
                                    {data[1]?.where}{' '}
                                </h4>
                            </div>
                        </div>
                        <div className="row-span-1 col-span-1 ">
                            <div className="xl:h-fit lg:h-[10rem] md:h-[5.8rem]">
                                <div className="w-full h-full">
                                    <img
                                        src={data[2]?.imageUrl}
                                        alt={data[2]?.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold">
                                    {' '}
                                    {data[2]?.title}{' '}
                                </h2>
                                <h4 className="text-xl font-semibold">
                                    {' '}
                                    {data[2]?.where}{' '}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-3">
                        <div className=" ">
                            <div>
                                <div className="w-full">
                                    <img
                                        src={data[3]?.imageUrl}
                                        alt={data[3]?.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold">
                                    {' '}
                                    {data[3]?.title}{' '}
                                </h2>
                                <h4 className="text-xl font-semibold">
                                    {' '}
                                    {data[3]?.where}{' '}
                                </h4>
                            </div>
                        </div>
                        <div className=" ">
                            <div>
                                <div className="w-full">
                                    <img
                                        src={data[4]?.imageUrl}
                                        alt={data[4]?.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold">
                                    {' '}
                                    {data[4]?.title}{' '}
                                </h2>
                                <h4 className="text-xl font-semibold">
                                    {' '}
                                    {data[4]?.where}{' '}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-primaryColor/10 h-full col-span-1 rounded-r-lg">
                    <ul className="p-3">
                        <li className="flex">
                            <div className="pr-2 text-center border-r-2 ">
                                <span className="text-xl font-semibold">
                                    17
                                </span>{' '}
                                <br />{' '}
                                <span className="text-2xl font-bold uppercase">
                                    Nov
                                </span>
                            </div>{' '}
                            <div className="pl-2 -l-2 font-semibold ">
                                <h2 className="text-xl">THANKSGIVING</h2>
                                <p className="text-base">
                                    Exclusively in Movie Theaters November
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="pr-2 text-center border-r-2">
                                <span className="text-xl font-semibold">
                                    22
                                </span>{' '}
                                <br />{' '}
                                <span className="text-2xl font-bold uppercase">
                                    Nov
                                </span>
                            </div>{' '}
                            <div className="pl-2 -l-2 font-semibold">
                                <h2 className="text-xl">NAPOLEON</h2>
                                <p className="text-base">
                                    Exclusively in Movie Theaters Thanksgiving
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="pr-2 text-center border-r-2">
                                <span className="text-xl font-semibold">
                                    12
                                </span>{' '}
                                <br />{' '}
                                <span className="text-2xl font-bold uppercase">
                                    Jan
                                </span>
                            </div>{' '}
                            <div className="pl-2 -l-2 font-semibold">
                                <h2 className="text-xl">
                                    THE BOOK OF CLARENCE
                                </h2>
                                <p className="text-base">
                                    Exclusively in Movie Theaters Coming Soon
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="pr-2 text-center border-r-2">
                                <span className="text-xl font-semibold">
                                    30
                                </span>{' '}
                                <br />{' '}
                                <span className="text-2xl font-bold uppercase">
                                    Aug
                                </span>
                            </div>{' '}
                            <div className="pl-2 -l-2 font-semibold">
                                <h2 className="text-xl">KRAVEN THE HUNTER</h2>
                                <p className="text-base">Coming Soon</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PopularShows;

PopularShows.propTypes = {
    data: PropTypes.array.isRequired,
};
