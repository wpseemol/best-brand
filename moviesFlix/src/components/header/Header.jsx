import { useLocation } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import HeroSlider from '../heroSlider/HeroSlider';

const Header = () => {
    const crentlocaLocation = useLocation();
    console.log(crentlocaLocation.pathname === '/');
    return (
        <>
            {crentlocaLocation.pathname === '/' ? (
                <HeroSlider>
                    <nav>
                        <Nav /> {/* Nav come from '../components/nav/Nav'  */}
                    </nav>
                </HeroSlider>
            ) : (
                <nav>
                    <Nav /> {/* Nav come from '../components/nav/Nav'  */}
                </nav>
            )}
        </>
    );
};

export default Header;
