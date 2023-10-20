import { Link, useLoaderData } from 'react-router-dom';

const Movies = () => {
    const { data } = useLoaderData();
    const fcs = data.filter((element) => {
        return element.category === 'Featured & Coming Soon';
    });

    const actionMovies = data.filter((element) => {
        return element.category === 'Action Movies';
    });

    return (
        <>
            <div className="h-20 w-5"></div>
            <div className="md:mt-20 mt-16">
                {/* Featured & Coming Soon */}
                <div className="md:mx-16 mx-2 ">
                    <h2 className="sm:text-3xl text-xl font-bold mb-6">
                        Featured & Coming Soon
                    </h2>
                    <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        {fcs.map((element, index) => {
                            return (
                                <div key={'fcs-' + index} className="border">
                                    <Link to={`${element._id}`}>
                                        <div className="w-full">
                                            <img
                                                src={element.picUrl}
                                                alt=""
                                                className="w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="mt-5">
                                            <div className="text-xl font-bold">
                                                <h2>{element.name}</h2>
                                            </div>
                                            <div className="text-lg font-semibold">
                                                <p> {element.comingSoon} </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Action Movies */}
                <div className="md:mx-16 mx-2 mt-14">
                    <h2 className="sm:text-3xl text-xl font-bold mb-6">
                        Action Movies
                    </h2>
                    <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        {actionMovies.map((element, index) => {
                            return (
                                <div key={'fcs-' + index} className="border">
                                    <Link to={`${element._id}`}>
                                        <div>
                                            <img src={element.picUrl} alt="" />
                                        </div>
                                        <div className="mt-5">
                                            <div className="text-xl font-bold">
                                                <h2>{element.name}</h2>
                                            </div>
                                            <div className="text-lg font-semibold">
                                                <p> {element.comingSoon} </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movies;
