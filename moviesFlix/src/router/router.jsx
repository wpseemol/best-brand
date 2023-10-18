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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />, //Root come from 'root/Root'
        children: [
            {
                path: '/',
                element: <Home />, //Home come from 'pages/home/Home'
                loader: () => {
                    return axios.get('https://www.boredapi.com/api/activity');
                },
            },
            {
                path: '/explore',
                element: <Explore />, // Explore come from '../pages/explore/Explore.jsx'
            },
            {
                path: '/movies',
                element: <Movies />, // Explore come from '../pages/movies/Movies.jsx'
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
