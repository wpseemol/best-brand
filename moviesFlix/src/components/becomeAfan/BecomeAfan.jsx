const BecomeAfan = () => {
    return (
        <>
            <div className="bg-cover bg-no-repeat   bg-[url('https://i.ibb.co/jLzY6bt/full-image.jpg')]">
                <div className="grid sm:grid-cols-2 grid-cols-1 relative">
                    <div></div>
                    <div className="flex flex-col my-28 items-center justify-center text-center md:text-black text-white">
                        <h2 className="text-5xl font-bold">BECOME A FAN</h2>
                        <p className="text-xl font-semibold my-4">
                            Subscribe to our newsletters and get updates from{' '}
                            <br />
                            Sony Pictures delivered right to your inbox.
                        </p>
                        <button className="seconderBtn md:bg-white bg-primaryColor/80 md:text-black text-white md:hover:bg-slate-300 font-bold">
                            Sign Up <br /> Now
                        </button>
                    </div>
                    <div className="absolute top-0 left-0 bg-black/30 w-full h-full"></div>
                </div>
            </div>
        </>
    );
};

export default BecomeAfan;
