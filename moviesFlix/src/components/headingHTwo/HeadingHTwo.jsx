import Aos from 'aos';
import { useEffect } from 'react';

const HeadingHTwo = ({ hTwo }) => {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            {/* title here */}
            <h2
                data-aos="flip-left"
                className="xl:text-5xl md:text-4xl text-2xl py-1 font-bold
            ">
                {hTwo}
            </h2>
        </>
    );
};

export default HeadingHTwo;
