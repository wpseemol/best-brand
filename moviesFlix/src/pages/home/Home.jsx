import { useLoaderData } from 'react-router-dom';
import Entertainment from '../../components/entertainment/Entertainment';
import PremiereJobs from '../../components/premiereJobs/PremiereJobs';
import BehindTheScenes from '../../components/behindTheScenes/BehindTheScenes';

const Home = () => {
    const { data } = useLoaderData(); // home data fetch
    const { resultEntertainment, resultBehindTheScenes } = data;

    // console.log(resultEntertainment);

    return (
        <>
            {/* Entertainment */}
            <section className="myContainer md:mt-20 mt-12">
                <Entertainment data={resultEntertainment} />
            </section>
            {/* premiere Jobs */}
            <section className="myContainer md:mt-20 mt-12">
                <PremiereJobs />
            </section>
            {/* BEHIND THE SCENES */}
            <section className=" md:mt-20 mt-12 overflow-hidden">
                <div className="myContainer md:py-14 border">
                    <BehindTheScenes data={resultBehindTheScenes} />
                </div>
            </section>
        </>
    );
};

export default Home;
