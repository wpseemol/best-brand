import React from 'react';
import { Link } from 'react-router-dom';

const PopularMovie = ({ data }) => {
    return (
        <div className="sm:grid sm:grid-cols-2 grid-cols-1 gap-2">
            {data.map((element, index) => (
                <div key={index} className="w-full relative overflow-hidden">
                    <Link to={`/movie/${element._id}`}>
                        <img
                            src={element?.banar}
                            alt={element?.name}
                            className="w-full h-full object-cover object-center"
                        />
                    </Link>
                    {element?.name && (
                        <div className="absolute bottom-5 left-5 bg-primaryColor/40 text-white p-2">
                            <h2 className="text-2xl font-bold">
                                {element?.name}
                            </h2>
                            <h3 className="text-xl font-semibold">
                                {element?.where}
                            </h3>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PopularMovie;
