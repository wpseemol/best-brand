import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import axios from 'axios';
import HeaderText from '../headerText/HeaderText';

const HeroSlider = ({ children }) => {
    const [homeBanner, setHomeBanner] = useState([]);

    useEffect(() => {
        Aos.init({
            duration: 1200,
        });

        axios
            .get('http://localhost:5000/top-collection-movies')
            .then(function (response) {
                setHomeBanner(response?.data);
            })
            .catch(function (error) {
                // console.log(error);
                setHomeBanner([]);
            });
    }, []);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                let num = parseInt(prevCounter, 10) + 1;
                if (num < 10) {
                    return `0${num}`;
                } else if (num <= 25) {
                    return `${num}`;
                } else {
                    return '00';
                }
            });
        }, 200);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, EffectFade]}
                className="mySwiper">
                {homeBanner.map((element, inx) => {
                    return (
                        <SwiperSlide key={'banner-' + inx}>
                            <div className="w-full xl:h-screen">
                                <div className=" overflow-hidden relative">
                                    <img
                                        src={element?.ImageUrl}
                                        alt={element?.name}
                                        className="w-full h-full object-cover object-center 
                                duration-1000"
                                        style={{
                                            transform: `scale(1.${counter})`,
                                        }}
                                    />

                                    <div className="absolute bg-black/30 w-full h-full z-30 top-0 left-0">
                                        <div className="flex items-center lg:ml-16 md:ml-8 ml-2 h-full ">
                                            <div className="demo">
                                                <HeaderText />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <div className="fixed top-1 z-50 w-full overflow-hidden">
                {children}
            </div>
        </>
    );
};

export default HeroSlider;
