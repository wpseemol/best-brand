import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData(); // home data fetch
    // console.log(data.data);

    return (
        <div className="demo">
            this is home page it
            <br />
            {data.data.activity}
        </div>
    );
};

export default Home;
