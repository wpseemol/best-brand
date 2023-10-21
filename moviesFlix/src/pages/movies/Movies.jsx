import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import '../../assets/css/slidertimer.css';

const Movies = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('https://movies-flix-server.vercel.app/movies')
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
                    .delete(
                        `https://movies-flix-server.vercel.app/movies/${id}`
                    )
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

    // array shuffiling for bnar
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledArray = shuffleArray(data);

    return (
        <>
            <div className="w-full lg:h-[35rem] md:h-[25rem] sm:h-[20rem] h-[15rem]">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper">
                    {shuffledArray.slice(0, 4).map((element, index) => {
                        return (
                            <SwiperSlide key={index + '-slider'}>
                                <div className="w-full">
                                    {' '}
                                    <img
                                        src={element?.bnarImgUrl}
                                        alt={element?.name}
                                        className="w-full object-cover object-center"
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
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
