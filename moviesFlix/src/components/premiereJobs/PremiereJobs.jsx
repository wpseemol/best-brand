import HeadingHTwo from '../headingHTwo/HeadingHTwo';
import TabContant from '../tabContant/TabContant';
import '../../assets/css/borderAnimeson.css';

const PremiereJobs = () => {
    return (
        <>
            <div className="relative">
                <div className="uppercase md:ml-0 ml-2 z-20">
                    <div className="relative ">
                        <div className="ml-3">
                            <HeadingHTwo hTwo={'PREMIERE JOBS'} />
                        </div>
                        <div className="border-primaryColor border-l-4 w-1 h-[1.52rem] absolute top-[.56rem] left-0"></div>
                    </div>
                </div>
                <div className="z-20">
                    <TabContant />
                </div>

                <div className=" absolute -z-10 xl:-top-10 md:-top-8 -top-6 -left-48 border-2 border-gray-600 w-full xl:h-64 h-[20rem]"></div>
            </div>
        </>
    );
};

export default PremiereJobs;
