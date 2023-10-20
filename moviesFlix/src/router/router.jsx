import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../pages/home/Home';
import axios from 'axios';
import Explore from '../pages/explore/Explore';
import Movies from '../pages/movies/Movies';
import Games from '../pages/games/Games';
import Careers from '../pages/careers/Careers';
import WhoWeAre from '../pages/whoWeAre/WhoWeAre';
import AboutUs from '../pages/aboutUs/AboutUs';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ErrorPage from '../pages/errorePage/Errorpage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />, //Root come from 'root/Root'
        errorElement: <ErrorPage />, // ErrorPage come from '../pages/errorePage/ErrorPage.jsx'
        children: [
            {
                path: '/',
                element: <Home />, //Home come from 'pages/home/Home'
                loader: () => {
                    return axios.get('http://localhost:5000/home');
                },
            },
            {
                path: '/explore',
                element: <Explore />, // Explore come from '../pages/explore/Explore.jsx'
            },
            {
                path: '/movies',
                element: <Movies />, // Explore come from '../pages/movies/Movies.jsx'
                loader: () => {
                    return axios.get('http://localhost:5000/movies');
                },
            },
            {
                path: '/games',
                element: <Games />, // Explore come from '../pages/games/Games.jsx'
            },
            {
                path: '/login',
                element: <Login />, // Explore come from '../pages/games/Games.jsx'
            },
            {
                path: '/register',
                element: <Register />, // Explore come from '../pages/games/Games.jsx'
            },

            {
                path: '/careers',
                element: <Careers />, // Explore come from '../pages/careers/Careers.jsx'
            },
            {
                path: '/who-we-are',
                element: <WhoWeAre />, // Explore come from '../pages/whoWeAre/WhoWeAre.jsx'
            },
            {
                path: '/about-us',
                element: <AboutUs />, // Explore come from '../pages/aboutUs/AboutUs.jsx'
            },
        ],
    },
]);

export default router;
