import HomeHeroSection from '../../components/homeHeroSection/HomeHeroSection';
import CategorySection from '../../components/categorySection/CategorySection';

const Home = () => {
    return (
        <>
            {/* hero section */}
            <section className="container mx-auto md:mt-16 mt-5">
                <HomeHeroSection />
            </section>

            <section className="">
                <CategorySection />
            </section>
        </>
    );
};

export default Home;
