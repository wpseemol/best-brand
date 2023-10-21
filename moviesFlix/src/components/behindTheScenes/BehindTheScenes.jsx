import HeadingHTwo from '../headingHTwo/HeadingHTwo';
import PropTypes from 'prop-types';

const BehindTheScenes = ({ data }) => {
    const {
        titleMain,
        name,
        jobHolderImag,
        jobPost,
        discription,
        videoLink,
        videoTitle,
        videoDisc,
    } = data[0];

    return (
        <>
            <div className="px-2">
                <div className="relative overflow-hidden  mb-6">
                    <div className="ml-3">
                        <HeadingHTwo hTwo={titleMain} />
                    </div>
                    <div className="border-primaryColor border-l-4 w-1 h-[100rem] absolute top-0 left-0"></div>
                </div>
                <div className="flex items-start md:flex-row flex-col gap-6">
                    <div className="xl:w-[19rem] lg:w-[35rem] md:w-[60rem]  border">
                        <img
                            src={jobHolderImag}
                            alt={name}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold">{name}</h2>
                            <h3 className="text-2xl font-semibold">
                                {jobPost}
                            </h3>
                        </div>
                        <div className="relative overflow-hidden">
                            <p className="ml-3 xl:w-3/4 text-xl font-medium">
                                {discription}
                            </p>
                            <div className="border-primaryColor border-l-4 w-1 h-[500rem] absolute top-0 left-0"></div>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col justify-center items-center gap-12 mt-28 relative ">
                    <div
                        className="xl:w-[45rem]  md:w-[250rem] md:h-[15rem] 
                            lg:h-[16rem] xl:h-[19rem]  h-[15rem] overflow-hidden border">
                        <iframe
                            className="h-full"
                            width="560"
                            height="315"
                            src={videoLink}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div>
                        <div className="relative overflow-hidden z-10 mb-6">
                            <div className="ml-3">
                                <HeadingHTwo hTwo={videoTitle} />
                            </div>
                            <div className="border-primaryColor border-l-4 w-1 h-[100rem] absolute top-0 left-0"></div>
                        </div>
                        <div className="">
                            <p className="ml-3 xl:w-3/4 text-xl font-medium">
                                {videoDisc}
                            </p>
                        </div>
                    </div>

                    <div
                        data-aos="zoom-in-left"
                        className=" absolute -z-10 xl:-top-9 md:-top-8 -top-6 md:-right-56 sm:-right-16 -right-32  border-2 border-gray-600 md:w-full sm:w-[35rem] w-[25rem] xl:h-96 md:h-[20rem]  h-[12.5rem]"></div>
                </div>
            </div>
        </>
    );
};

BehindTheScenes.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BehindTheScenes;
