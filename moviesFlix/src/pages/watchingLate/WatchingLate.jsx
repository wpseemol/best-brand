import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import HeadingHTwo from '../../components/headingHTwo/HeadingHTwo';
import { FaXmark } from 'react-icons/fa6';

const WatchingLate = () => {
    const [watchingLateData, setWatchingLateData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/watching-late')
            .then(function (response) {
                const { data } = response;
                setWatchingLateData(data);
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
                const afterRemove = watchingLateData.filter((element) => {
                    return element.wlId !== id;
                });

                axios
                    .delete(`http://localhost:5000/watching-late/${id}`)
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

                setWatchingLateData(afterRemove);
            }
        });
    };

    return (
        <div className="myContainer md:mt-20 mt-16">
            <div>
                {' '}
                <div className="relative overflow-hidden  mb-6">
                    <div className="ml-3">
                        <HeadingHTwo hTwo={'Watching Late'} />
                    </div>
                    <div className="border-primaryColor border-l-4 w-1 h-[100rem] absolute top-0 left-0"></div>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {watchingLateData.map((element, index) => {
                    {
                        return (
                            <div key={index} className="relative">
                                <div>
                                    <div>
                                        <img
                                            src={element?.picUrl}
                                            alt={element?.name}
                                        />
                                    </div>
                                    <div className="md:text-3xl text-2xl font-bold">
                                        <h2>{element?.name}</h2>
                                    </div>
                                    <div className="text-lg font-semibold">
                                        <h2>{element?.comingSoon}</h2>
                                    </div>
                                </div>
                                <div
                                    onClick={() =>
                                        handalRemovieWL(element?.wlId)
                                    }
                                    className="absolute -top-2 -right-2 flex justify-center items-center rounded-full font-bold text-3xl w-10 h-10 bg-red-800 duration-150 text-white hover:scale-110 hover:rotate-90 ">
                                    <FaXmark />
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default WatchingLate;
