import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <>
            <header className="font-Assistant">
                <Header />{' '}
                {/* Header come from '../components/header/Header'  */}
            </header>

            <main className="font-Assistant">
                <Outlet />
            </main>

            <footer className="font-Assistant">
                <Footer />{' '}
                {/* Footer come from '../components/footer/Footer' */}
            </footer>
        </>
    );
};

export default Root;
