import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { useEffect, useState } from 'react';

const HeroSlider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((counter) => (counter + 1) % 11);
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    console.log(counter);

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
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <div className=" overflow-hidden">
                            <img
                                src="https://i.ibb.co/mXngkTk/Nice-Chair-4.jpg"
                                alt=""
                                className={`w-full h-full object-cover object-center duration-300 scale-[1.${counter}]`}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="w-full h-screen">
                        <div className=" overflow-hidden">
                            <img
                                src="https://i.ibb.co/KjGxLYK/Nice-Chair-5.jpg"
                                className="w-full h-full object-cover object-center"
                                alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <div className=" overflow-hidden">
                            <img
                                src="https://i.ibb.co/D9Nm7fc/product-12-2.jpg"
                                className="w-full h-full object-cover object-center"
                                alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <div className=" overflow-hidden">
                            <img
                                src="https://i.ibb.co/8zdyY5V/product-12-3.jpg"
                                className="w-full h-full object-cover object-center"
                                alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide> */}
                ...
            </Swiper>

            <div className="fixed top-1 z-50 w-full">{children}</div>
        </>
    );
};

export default HeroSlider;
