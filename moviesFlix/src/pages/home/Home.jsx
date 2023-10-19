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
            <section className="myContainer md:mt-16 mt-10">
                <Entertainment data={resultEntertainment} />
            </section>
            {/* premiere Jobs */}
            <section className="myContainer md:mt-16 mt-10">
                <PremiereJobs />
            </section>
            {/* BEHIND THE SCENES */}
            <section className="myContainer md:mt-16 mt-10">
                <BehindTheScenes data={resultBehindTheScenes} />
            </section>
        </>
    );
};

export default Home;
