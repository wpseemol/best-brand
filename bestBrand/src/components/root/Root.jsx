import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';

const Root = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                {' '}
                <Outlet />{' '}
            </main>
            <footer></footer>
        </>
    );
};

export default Root;
