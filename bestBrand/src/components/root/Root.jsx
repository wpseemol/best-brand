import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';

const Root = () => {
    return (
        <>
            <header className="font-mySansFont">
                <NavBar />
            </header>
            <main className="font-mySansFont container mx-auto">
                {' '}
                <Outlet />{' '}
            </main>
            <footer className="font-mySansFont"></footer>
        </>
    );
};

export default Root;
