import { useLoaderData } from 'react-router-dom';
import Entertainment from '../../components/entertainment/Entertainment';
import PremiereJobs from '../../components/premiereJobs/PremiereJobs';
import BehindTheScenes from '../../components/behindTheScenes/BehindTheScenes';
import CareerOption from '../../components/careerOption/CareerOption';
import PopularMovie from '../../components/popularMovie/PopularMovie';
import PopularShows from '../../components/popularShows/PopularShows';
import Video from '../../components/video/Video';
import BecomeAfan from '../../components/becomeAfan/BecomeAfan';

const Home = () => {
    const { data } = useLoaderData(); // home data fetch
    const {
        resultEntertainment,
        resultBehindTheScenes,
        resultCareer,
        resultPopularMovies,
        resultShow,
        resultTrailerVideo,
    } = data;

    // console.log(resultEntertainment);

    return (
        <>
            {/* Entertainment */}
            <section className="myContainer md:mt-20 mt-12">
                <Entertainment data={resultEntertainment} />
            </section>
            {/* Popular show */}
            <section className="myContainer md:mt-20 mt-12">
                <PopularMovie data={resultPopularMovies} />
            </section>
            {/* popular show  */}
            <section className="myContainer md:mt-20 mt-12">
                <PopularShows data={resultShow} />
            </section>
            {/* video */}
            <section className=" md:mt-20 mt-12">
                <Video data={resultTrailerVideo} />
            </section>
            {/* BEHIND THE SCENES */}
            <section className=" md:mt-20 mt-12 overflow-hidden bg-primaryColor/10">
                <div className="myContainer md:py-20 py-10">
                    <BehindTheScenes data={resultBehindTheScenes} />
                </div>
            </section>
            {/* CAREER OPPORTUNITIES */}
            <section className="overflow-hidden md:mt-20 mt-12 py-1">
                <div className="myContainer">
                    <CareerOption data={resultCareer} />
                </div>
            </section>
            {/* premiere Jobs */}
            <section className="myContainer md:mt-28 mt-12">
                <PremiereJobs />
            </section>
            {/* BECOME A FAN */}
            <section className=" md:mt-28 mt-12">
                <BecomeAfan />
            </section>
        </>
    );
};

export default Home;
