import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <>
            <header>
                <Header />{' '}
                {/* Header come from '../components/header/Header'  */}
                <nav>
                    <Nav /> {/* Nav come from '../components/nav/Nav'  */}
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />{' '}
                {/* Footer come from '../components/footer/Footer' */}
            </footer>
        </>
    );
};

export default Root;
