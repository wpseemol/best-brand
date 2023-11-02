import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CardItems = () => {
    const { data } = useLoaderData();

    const [quantitiesCount, setquantitiesCount] = useState(data.map(() => 1));

    const handleAdd = (index) => {
        const newQuantities = [...quantitiesCount];
        newQuantities[index] = newQuantities[index] + 1;
        setquantitiesCount(newQuantities);
    };

    const handleRemove = (index) => {
        const newQuantities = [...quantitiesCount];
        if (newQuantities[index] > 1) {
            newQuantities[index] = newQuantities[index] - 1;
            setquantitiesCount(newQuantities);
        }
    };

    return (
        <div className="container mx-auto md:my-16 my-6">
            <div className="overflow-auto">
                <table className="w-full text-left border border-separate rounded border-slate-200">
                    <tbody>
                        <tr className="transition-colors duration-300 hover:bg-slate-50">
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Image
                            </th>
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Product Name
                            </th>
                            <th className="  w-40 h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100   border-t border-l first:border-l-0 border-slate-200">
                                Brand
                            </th>
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Quantity
                            </th>
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Unit Price
                            </th>
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Total
                            </th>
                        </tr>
                        {data.map((element, inx) => {
                            return (
                                <tr
                                    key={inx}
                                    className="transition-colors duration-300 hover:bg-slate-50">
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="w-20 h-20 mx-auto">
                                            <img
                                                src={element?.imageUrl}
                                                alt={element?.name}
                                                className="w-full object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="">
                                            <h2>{element?.name} </h2>
                                        </div>
                                    </td>
                                    <td className=" h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="">
                                            <h2>{element?.brand} </h2>
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="">
                                            <h2 className="border flex justify-center items-center w-fit">
                                                <button
                                                    className=" bg-primaryColor/25 p-2 rounded-sm border"
                                                    onClick={() =>
                                                        handleRemove(inx)
                                                    }>
                                                    -
                                                </button>
                                                <span className=" bg-slate-200 px-3 py-2 border">
                                                    {quantitiesCount[inx]}
                                                </span>

                                                <button
                                                    className=" bg-primaryColor/25 p-2 rounded-sm border"
                                                    onClick={() =>
                                                        handleAdd(inx)
                                                    }>
                                                    +
                                                </button>
                                            </h2>
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="">
                                            <p>{element?.price}</p>
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="">
                                            <p>
                                                {quantitiesCount[inx] *
                                                    parseInt(element?.price)}
                                                <span>৳</span>
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CardItems;
