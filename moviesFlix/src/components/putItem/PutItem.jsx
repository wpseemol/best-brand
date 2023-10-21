import axios from 'axios';
import { element } from 'prop-types';
import { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const PutItem = ({ allData, clickText, popupClose }) => {
    const filterSingleData = Object.keys(allData).find((element) => {
        return element === (clickText && Object.keys(clickText)[0]);
    });
    const handalPut = (e) => {
        e.preventDefault();

        const keysToFilter = ['_id', filterSingleData];

        const filteredObject = Object.keys(allData).reduce((obj, key) => {
            if (!keysToFilter.includes(key)) {
                obj[key] = allData[key];
            }
            return obj;
        }, {});

        filteredObject[filterSingleData] = e.target.updatText.value;

        console.log(filteredObject);

        axios
            .put(`http://localhost:5000/movies/${allData._id}`, {
                filteredObject,
            })
            .then(function () {
                Swal.fire({
                    title: 'Done!',
                    text: 'Movie edit Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });

                window.location.reload();
            })
            .catch(function (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
                window.location.reload();
            });
    };

    return (
        <div className=" sm:mt-8 fixed md:w-1/2 w-full bg-black/60 text-white text-4xl left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 ">
            <div className="relative">
                <form onSubmit={handalPut} className=" p-12">
                    <textarea
                        className="w-full text-black resize-none bg-white/70"
                        name="updatText"
                        defaultValue={clickText && clickText[filterSingleData]}
                        cols="30"
                        rows={
                            clickText &&
                            clickText[filterSingleData].length > 180
                                ? '8'
                                : '3'
                        }
                        style={{
                            minHeight: '10rem',
                            height: 'auto',
                        }}></textarea>
                    <br />
                    <input
                        className="seconderBtn mt-4 bg-white/60 hover:bg-white/70 font-bold text-xl"
                        type="submit"
                        value="Updated"
                    />
                </form>
                <div
                    onClick={() => popupClose(false)}
                    className="absolute -top-2 -right-2 flex justify-center items-center rounded-full font-bold text-3xl w-10 h-10 bg-red-800 duration-150 text-white hover:scale-110 hover:rotate-90 ">
                    <FaXmark />
                </div>
            </div>
        </div>
    );
};

export default PutItem;
