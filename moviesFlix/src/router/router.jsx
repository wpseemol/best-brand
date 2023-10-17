import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import axios from "axios";

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,   //Root come from 'root/Root'
    children:[{
        path: "/",
        element: <Home />,  //Home come from 'pages/home/Home'
        loader: ()=>{
          return axios.get('https://www.boredapi.com/api/activity');
        },
    }]

}])

export default router;