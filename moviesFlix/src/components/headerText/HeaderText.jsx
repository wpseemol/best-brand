import Aos from 'aos';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeaderText = () => {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <div className="flex flex-col items-start justify-start md:-mt-7 mt-6">
                <div className="lg:text-6xl md:text-3xl sm:text-xl text-lg">
                    <TypeAnimation
                        sequence={[
                            'Movies Watching', // Types 'One'
                            1000, // Waits 1s
                            'MoviesFlex Site Is Best Entertain For You ', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'Keep Connected With Us', // Types 'Three' without deleting 'Two'
                            () => {},
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                        className="text-white"
                    />
                </div>
                <div className="md:mt-7 mt-0" data-aos="zoom-in">
                    <button className="primaryBtn bg-primaryColor border-primaryColor md:text-xl md:font-bold">
                        {' '}
                        Watching Now{' '}
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeaderText;
