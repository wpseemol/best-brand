import HeadingHTwo from '../headingHTwo/HeadingHTwo';

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
            </div>
        </>
    );
};

export default BehindTheScenes;
