import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data.data);

    return (
        <div className="text-center text-4xl font-bold">
            this is home page it
            <br />
            {data.data.activity}
        </div>
    );
};

export default Home;
