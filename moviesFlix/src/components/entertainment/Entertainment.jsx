import { useEffect } from 'react';
import DescriptionPe from '../descriptionPe/DescriptionPe';
import HeadingHTwo from '../headingHTwo/HeadingHTwo';
import Aos from 'aos';

const Entertainment = ({ data }) => {
    const { title, discription, fiserImg1, fiserImg2, fiserImg3 } = data[0];

    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <div className="lg:flex items-center gap-5 px-2 sm:px-0">
                <div data-aos="zoom-out-right">
                    <HeadingHTwo hTwo={title} />
                    <div className="pr-10 lg:mb-0 mb-5">
                        <DescriptionPe disPe={discription} />
                    </div>
                </div>
                <div
                    data-aos="zoom-out-left"
                    className="grid grid-row-2 grid-flow-col gap-2 overflow-hidden">
                    <div className="h-full row-span-1">
                        <div className="h-full">
                            <img
                                src={fiserImg2}
                                alt="Entertain Move Image"
                                className="h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="h-full row-span-1">
                        <div className="h-full">
                            <img
                                src={fiserImg3}
                                alt="Entertain Move Image"
                                className="h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="round row-span-2 h-full">
                        <div className="h-full">
                            <img
                                src={fiserImg1}
                                alt="Entertain Move Image"
                                className="h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Entertainment;
