import HeadingHTwo from '../headingHTwo/HeadingHTwo';
import TabContant from '../tabContant/TabContant';

const PremiereJobs = () => {
    return (
        <>
            <div className="uppercase md:ml-0 ml-2">
                <div className="relative ">
                    <div className="ml-3">
                        <HeadingHTwo hTwo={'PREMIERE JOBS'} />
                    </div>
                    <div className="border-primaryColor border-l-4 w-1 h-[1.52rem] absolute top-[.56rem] left-0"></div>
                </div>
            </div>
            <div>
                <TabContant />
            </div>
        </>
    );
};

export default PremiereJobs;
