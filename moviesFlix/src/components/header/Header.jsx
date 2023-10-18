import Nav from '../../components/nav/Nav';
import HeroSlider from '../heroSlider/HeroSlider';

const Header = () => {
    return (
        <>
            <HeroSlider>
                <nav>
                    <Nav /> {/* Nav come from '../components/nav/Nav'  */}
                </nav>
            </HeroSlider>
        </>
    );
};

export default Header;
