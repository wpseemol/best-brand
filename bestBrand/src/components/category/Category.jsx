import { useLoaderData } from 'react-router-dom';
import Title from '../title/Title';

const Category = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <>
            <Title>{data[0]?.category?.categoryName}</Title>
            <div className="grid grid-cols-5 gap-3">
                {data.map((element, inx) => {
                    return (
                        <dir
                            key={inx}
                            className="bg-white px-1 py-3 rounded-md">
                            <div>
                                <div>
                                    <img
                                        src={element.ImgUrl}
                                        alt={element?.name}
                                    />
                                </div>
                                <div className="text-center mt-4">
                                    <h2 className="text-base font-medium">
                                        {element?.name}
                                    </h2>
                                    <p className="text-sm font-normal mt-2">
                                        Price: <span>{element.price}</span>{' '}
                                    </p>
                                </div>
                            </div>
                        </dir>
                    );
                })}{' '}
            </div>
            ;
        </>
    );
};

export default Category;
