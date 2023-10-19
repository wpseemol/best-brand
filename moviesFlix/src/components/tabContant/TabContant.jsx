import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TabContant() {
    const [tabSelected, setTabSelected] = useState({
        currentTab: 1,
        noTabs: 3,
    });

    const wrapperRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.keyCode === 39) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab >= 1 &&
                    tabSelected.currentTab < tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab + 1,
                    });
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: 1,
                    });
                }
            }
        }

        if (e.keyCode === 37) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab > 1 &&
                    tabSelected.currentTab <= tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab - 1,
                    });
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.noTabs,
                    });
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <>
            {/*<!-- Component: Basic base sized tab --> */}
            <section className="max-w-full" aria-multiselectable="false">
                <ul
                    className="flex justify-start items-center flex-col md:flex-row ml-3"
                    role="tablist"
                    ref={wrapperRef}>
                    <li className="" role="presentation">
                        <button
                            className={`-mb-px inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-4 px-5 text-xl  font-semibold tracking-wide transition duration-300 hover:bg-primaryColor/20 hover:stroke-primaryColor focus:bg-primaryColor/20 focus-visible:outline-none disabled:cursor-not-allowed ${
                                tabSelected.currentTab === 1
                                    ? 'border-primaryColor stroke-primaryColor/40 text-primaryColor hover:border-primaryColor hover:text-primaryColor focus:border-primaryColor focus:stroke-primaryColor focus:primaryColor disabled:border-slate-500'
                                    : 'justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-primaryColor hover:text-primaryColor focus:border-primaryColor focus:stroke-primaryColor focus:text-primaryColor disabled:text-primaryColor'
                            }`}
                            id="tab-label-1b"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="1"
                            tabindex={`${
                                tabSelected.currentTab === 1 ? '0' : '-1'
                            }`}
                            aria-controls="tab-panel-1b"
                            aria-selected={`${
                                tabSelected.currentTab === 1 ? 'true' : 'false'
                            }`}
                            onClick={() =>
                                setTabSelected({
                                    ...tabSelected,
                                    currentTab: 1,
                                })
                            }>
                            <span>JOBS NEAR YOU</span>
                        </button>
                    </li>
                    <li className="md:mx-8" role="presentation">
                        <button
                            className={`-mb-px  inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-4 px-5 text-xl  font-semibold tracking-wide transition duration-300 hover:bg-primaryColor/20 hover:stroke-primaryColor focus:bg-primaryColor/20 focus-visible:outline-none disabled:cursor-not-allowed ${
                                tabSelected.currentTab === 2
                                    ? 'border-primaryColor stroke-primaryColor/40 text-primaryColor hover:border-primaryColor hover:text-primaryColor focus:border-primaryColor focus:stroke-primaryColor focus:primaryColor disabled:border-slate-500'
                                    : 'justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-primaryColor hover:text-primaryColor focus:border-primaryColor focus:stroke-primaryColor focus:text-primaryColor disabled:text-primaryColor'
                            }`}
                            id="tab-label-2b"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="2"
                            tabindex={`${
                                tabSelected.currentTab === 2 ? '0' : '-1'
                            }`}
                            aria-controls="tab-panel-2b"
                            aria-selected={`${
                                tabSelected.currentTab === 2 ? 'true' : 'false'
                            }`}
                            onClick={() =>
                                setTabSelected({
                                    ...tabSelected,
                                    currentTab: 2,
                                })
                            }>
                            <span>RECENTLY VIEWED JOBS</span>
                        </button>
                    </li>
                    <li className="" role="presentation">
                        <button
                            className={`-mb-px inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-4 px-5 text-xl  font-semibold tracking-wide transition duration-300 hover:bg-primaryColor/20 hover:stroke-primaryColor focus:bg-primaryColor/20 focus-visible:outline-none disabled:cursor-not-allowed ${
                                tabSelected.currentTab === 3
                                    ? 'border-primaryColor stroke-primaryColor/40 text-primaryColor hover:border-primaryColor hover:text-primaryColor focus:border-primaryColor focus:stroke-primaryColor focus:primaryColor disabled:border-slate-500'
                                    : 'justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-primaryColor hover:text-primaryColor focus:border-primaryColor focus:stroke-primaryColor focus:text-primaryColor disabled:text-primaryColor'
                            }`}
                            id="tab-label-3b"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="3"
                            tabindex={`${
                                tabSelected.currentTab === 3 ? '0' : '-1'
                            }`}
                            aria-controls="tab-panel-3b"
                            aria-selected={`${
                                tabSelected.currentTab === 3 ? 'true' : 'false'
                            }`}
                            onClick={() =>
                                setTabSelected({
                                    ...tabSelected,
                                    currentTab: 3,
                                })
                            }>
                            <span>SAVED JOBS</span>
                        </button>
                    </li>
                </ul>
                <div className="">
                    <div
                        className={`px-5 py-4  mt-5 ${
                            tabSelected.currentTab === 1 ? '' : 'hidden'
                        }`}
                        id="tab-panel-1b"
                        aria-hidden={`${
                            tabSelected.currentTab === 1 ? 'true' : 'false'
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-label-1b"
                        tabindex="-1">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gri gap-2">
                            <div className="border-2 border-primaryColor p-4">
                                <h2 className="text-2xl font-bold">
                                    <Link>
                                        Coordinator, Sales Planning & Operations
                                        - Greater China
                                    </Link>
                                </h2>
                                <p className="text-base font-semibold">
                                    Beijing, Beijing Municipality | 07/05/2023
                                </p>
                            </div>
                            <div className="border-2 border-primaryColor p-4">
                                <h2 className="text-2xl font-bold">
                                    <Link>Marketing Analyst, B2B</Link>
                                </h2>
                                <p className="text-base font-semibold">
                                    Buenos Aires | 09/27/2023
                                </p>
                            </div>
                            <div className="border-2 border-primaryColor p-4">
                                <h2 className="text-2xl font-bold">
                                    <Link>OnDemand Services Supervisor</Link>
                                </h2>
                                <p className="text-base font-semibold">
                                    Buenos Aires | 08/25/2023
                                </p>
                            </div>
                            <div className="border-2 border-primaryColor p-4">
                                <h2 className="text-2xl font-bold">
                                    <Link>
                                        Coordinator Creative Production B2I
                                    </Link>
                                </h2>
                                <p className="text-base font-semibold">
                                    Buenos Aires | 07/19/2023
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`px-5 py-4  mt-5 ${
                            tabSelected.currentTab === 2 ? '' : 'hidden'
                        }`}
                        id="tab-panel-2b"
                        aria-hidden={`${
                            tabSelected.currentTab === 2 ? 'true' : 'false'
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-label-2b"
                        tabindex="-1">
                        <div className="border-2 border-primaryColor p-4">
                            <div className="grid grid-cols-1">
                                <h2 className="text-2xl font-bold text-center mt-2 mb-8">
                                    You have not recently viewed any jobs.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`px-5 py-4  mt-5 ${
                            tabSelected.currentTab === 3 ? '' : 'hidden'
                        }`}
                        id="tab-panel-3b"
                        aria-hidden={`${
                            tabSelected.currentTab === 3 ? 'true' : 'false'
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-label-3b"
                        tabindex="-1">
                        <div className="border-2 border-primaryColor p-4">
                            <div className="grid grid-cols-1">
                                <h2 className="text-2xl font-bold text-center mt-2 mb-8">
                                    You have not saved any jobs.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- End Basic base sized tab --> */}
        </>
    );
}
