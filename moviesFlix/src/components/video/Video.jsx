import HeadingHTwo from '../headingHTwo/HeadingHTwo';

import Marquee from 'react-fast-marquee';

const Video = ({ data }) => {
    const title = 'Videos';
    return (
        <>
            <div className="md:mb-16 mb-10 px-3 sm:px-0 myContainer">
                <div className="relative overflow-hidden  mb-6">
                    <div className="ml-3">
                        <HeadingHTwo hTwo={title} />
                    </div>
                    <div className="border-primaryColor border-l-4 w-1 h-[100rem] absolute top-0 left-0"></div>
                </div>
                <h4 className="text-xl font-semibold">See All Videos</h4>
            </div>

            <Marquee speed={50} pauseOnHover={true}>
                {data.map((element, inx) => {
                    return (
                        <div key={inx} className="mx-14 ">
                            <iframe
                                width="560"
                                height="315"
                                src={element.videoUrl}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                            <h2 className="text-2xl font-bold">
                                {element.title}
                            </h2>
                            <h4 className="text-xl font-semibold">
                                {element.type}
                            </h4>
                        </div>
                    );
                })}
            </Marquee>
        </>
    );
};

export default Video;
