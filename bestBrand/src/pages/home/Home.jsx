import { useLoaderData } from 'react-router-dom';
import HomeHeroSection from '../../components/homeHeroSection/HomeHeroSection';

const Home = () => {
    const { data } = useLoaderData();
    // const uniqueArray = array.filter(
    //     (value, index) => array.indexOf(value) === index
    // );
    return (
        <>
            {/* hero section */}
            <section className="container mx-auto mt-10">
                <HomeHeroSection />
            </section>
        </>
    );
};

export default Home;
