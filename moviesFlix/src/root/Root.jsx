import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <header>
                <h2 className="text-center text-3xl font-bold">
                    This is Root Element
                </h2>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>

            
        </>
    );
};

export default Root;
