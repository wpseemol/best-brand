import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/root/Root';
import Home from '../home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]);

export default router;
