import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Movies = () => {
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/movies')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function () {
                // handle error
            });
    }, []);

    const fcs = data.filter((element) => {
        return element.category === 'Featured & Coming Soon';
    });

    const actionMovies = data.filter((element) => {
        return element.category === 'Action Movies';
    });

    const allMovies = data.filter((element) => {
        return !(
            element.category === 'Action Movies' ||
            element.category === 'Featured & Coming Soon'
        );
    });

    const handalRemovieWL = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to remove',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                const afterRemove = data.filter((element) => {
                    return element._id !== id;
                });

                axios
                    .delete(`http://localhost:5000/movies/${id}`)
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been remove.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        Swal.fire('Deleted!', error, 'success');
                    });

                setData(afterRemove);
            }
        });
    };

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
                                <div
                                    key={'fcs-' + index}
                                    className="border relative">
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
                                    {user && (
                                        <div
                                            onClick={() =>
                                                handalRemovieWL(element?._id)
                                            }
                                            className="absolute -top-2 -right-2 flex justify-center items-center rounded-full font-bold text-3xl w-10 h-10 bg-red-800 duration-150 text-white hover:scale-110 hover:rotate-90 ">
                                            <FaXmark />
                                        </div>
                                    )}
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
                                <div
                                    key={'fcs-' + index}
                                    className="border relative">
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
                                    {user && (
                                        <div
                                            onClick={() =>
                                                handalRemovieWL(element?._id)
                                            }
                                            className="absolute -top-2 -right-2 flex justify-center items-center rounded-full font-bold text-3xl w-10 h-10 bg-red-800 duration-150 text-white hover:scale-110 hover:rotate-90 ">
                                            <FaXmark />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* All Movies */}
                <div className="md:mx-16 mx-2 mt-14">
                    <h2 className="sm:text-3xl text-xl font-bold mb-6">All</h2>
                    <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        {allMovies.map((element, index) => {
                            return (
                                <div
                                    key={'fcs-' + index}
                                    className="border relative">
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
                                    {user && (
                                        <div
                                            onClick={() =>
                                                handalRemovieWL(element?._id)
                                            }
                                            className="absolute -top-2 -right-2 flex justify-center items-center rounded-full font-bold text-3xl w-10 h-10 bg-red-800 duration-150 text-white hover:scale-110 hover:rotate-90 ">
                                            <FaXmark />
                                        </div>
                                    )}
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
