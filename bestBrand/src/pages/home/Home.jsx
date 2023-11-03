import HomeHeroSection from '../../components/homeHeroSection/HomeHeroSection';
import CategorySection from '../../components/categorySection/CategorySection';
import HotProduct from '../../components/hotProduct/HotProduct';

const Home = () => {
    return (
        <>
            {/* hero section */}
            <section className="container mx-auto md:mt-16 mt-5">
                <HomeHeroSection />
            </section>

            {/* hot Product section */}
            <section className="container mx-auto md:mt-16 mt-5">
                <HotProduct />
            </section>

            <section className="">
                <CategorySection />
            </section>
        </>
    );
};

export default Home;
