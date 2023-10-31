import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/root/Root';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import PrivetRoute from '../privetRoute/PrivetRoute';
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/profile/Profile';
import Upload from '../pages/upload/Upload';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/dashboard',
                element: (
                    <PrivetRoute>
                        <Dashboard />
                    </PrivetRoute>
                ),
                children: [
                    {
                        path: '/dashboard/profile',
                        element: <Profile />,
                    },
                    {
                        path: '/dashboard/upload',
                        element: <Upload />,
                    },
                    {
                        path: '/dashboard/address',
                        element: <div>address</div>,
                    },
                ],
            },
        ],
    },
]);

export default router;
