import { useLoaderData } from 'react-router-dom';
import HomeHeroSection from '../../components/homeHeroSection/HomeHeroSection';
import CategorySection from '../../components/categorySection/CategorySection';

const Home = () => {
    const { data } = useLoaderData();
    // const uniqueArray = array.filter(
    //     (value, index) => array.indexOf(value) === index
    // );

    return (
        <>
            {/* hero section */}
            <section className="container mx-auto mt-16">
                <HomeHeroSection />
            </section>

            <section className="container mx-auto mt-16">
                <CategorySection />
            </section>
        </>
    );
};

export default Home;
