import axios from 'axios';
import { useState } from 'react';

const Nav = () => {
    const [iconUrl, setIconUrl] = useState('');
    const [navBar, setNavBar] = useState([]);
    axios
        .get('http://localhost:5000/icon')
        .then(function (response) {
            setIconUrl(response?.data[2]?.url);
        })
        .catch(function (error) {
            console.log(error);
        });

    axios
        .get('http://localhost:5000/navbar')
        .then(function (response) {
            setNavBar([...navBar,]);
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <>
            <div className="w-80">
                <p className="demo">nav section</p>
                <img src={iconUrl} alt="" />
            </div>
        </>
    );
};

export default Nav;
