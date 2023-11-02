import { useLoaderData } from 'react-router-dom';
import Title from '../title/Title';
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/css/styles.css';
import CategoryDefualtSlider from '../categoryDefualtSlider/CategoryDefualtSlider';

const Category = () => {
    const { data } = useLoaderData();
    const { category, categoryBenar } = data || {};

    console.log(category);
    return (
        <>
            <div>
                {categoryBenar.length > 0 ? (
                    <div className="md:h-[30rem] h-60 ">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper ">
                            {categoryBenar.length > 0 &&
                                categoryBenar.map((element, inx) => {
                                    return (
                                        <SwiperSlide key={inx}>
                                            <img
                                                src={element.benarImage}
                                                alt={`Category slider Image ${
                                                    inx + 1
                                                }`}
                                                className="w-full object-cover object-center"
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                ) : (
                    <CategoryDefualtSlider />
                )}
            </div>
            <div className="container mx-auto ">
                <Title>{category[0]?.category?.categoryName}</Title>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3 md:px-0 px-2">
                    {category.map((element, inx) => {
                        return (
                            <dir
                                key={inx}
                                className="bg-white px-1 py-3 rounded-md">
                                <div>
                                    <div>
                                        <img
                                            src={element.ImgUrl}
                                            alt={element?.name}
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <h2 className="text-base font-medium">
                                            {element?.name}
                                        </h2>
                                        <p className="text-sm font-normal mt-2">
                                            Price: <span>{element.price}</span>{' '}
                                        </p>
                                    </div>
                                </div>
                            </dir>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Category;
