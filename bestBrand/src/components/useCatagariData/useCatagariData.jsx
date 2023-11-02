import axios from 'axios';
import { useEffect, useState } from 'react';

const useCatagariData = () => {
    const [catagoriData, setCatagoriData] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/products')
            .then(function (response) {
                //category
                // handle success
                const categoryData = response?.data.reduce((p, c) => {
                    const catName = p.find(
                        (item) =>
                            item?.category?.categoryName ===
                            c?.category?.categoryName
                    );
                    if (!catName) {
                        return p.concat([c]);
                    } else {
                        return p;
                    }
                }, []);

                const allCategory = categoryData.map(
                    (element) => element.category
                );

                setCatagoriData(allCategory);
            })
            .catch(function () {
                // handle error
            });
    }, []);

    return catagoriData;
};

export default useCatagariData;
