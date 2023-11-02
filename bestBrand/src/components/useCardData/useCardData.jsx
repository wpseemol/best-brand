import axios from 'axios';
import { useEffect, useState } from 'react';

const useCardData = () => {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/cart-items')
            .then(function (response) {
                setCardData(response.data);
            })
            .catch(function () {
                // handle error
            });
    }, []);
    return cardData;
};

export default useCardData;
