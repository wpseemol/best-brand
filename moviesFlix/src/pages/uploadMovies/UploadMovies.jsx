import axios from 'axios';
import HeadingHTwo from '../../components/headingHTwo/HeadingHTwo';
import { FaImdb } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const UploadMovies = () => {
    const title = 'Upload Movies';
    const demoDiscripton =
        "Set in 1967, THE MIRACLE CLUB follows the story of three generations of close friends, Lily (Maggie Smith), Eileen (Kathy Bates), and Dolly (Agnes O'Casey) of Ballygar, outside Dublin, who win a pilgrimage to the sacred French town of Lourdes, that place of miracles that draws millions of visitors each year.  Just before their trip, their old friend Chrissie (Laura Linney) arrives in Ballygar for her mother's funeral. The women set out on the journey that they hope will change their lives, with Chrissie, a skeptical traveler, joining in place of her mother. Along the way, old wounds are reopened, forcing the women to confront their pasts even as they travel in search of a miracle.";

    const demoImageUrl = 'https://picsum.photos/600/900';
    const demoBannerImageUrl = 'https://picsum.photos/500/300';
    const demoScreenplayBy = 'Joaquin Phoenix, Vanessa Kirby';
    const demoReleaseDate = 'Un Set';

    const demoShortDis = 'Available To Buy Or Rent Now';

    const handalUploadMovies = (e) => {
        e.preventDefault();
        const from = e.target;
        const movieName = from.movieName.value;
        const category = from.category.value;
        const imageUrl = from.imageUrl.value;
        const bannerImageUrl = from.bannerImageUrl.value;
        const screenplayBy = from.screenplayBy.value;
        const releaseDate = from.releaseDate.value;
        const description = from.description.value;
        const directedBy = from.directedBy.value;
        const shortDis = from.shortDis.value;
        const storyBy = from.storyBy.value;

        axios
            .post('http://localhost:5000/movies', {
                name: movieName,
                type: 'BIOGRAPHICAL DRAMA',
                comingSoon: shortDis ? shortDis : demoShortDis,
                category: category,
                picUrl: imageUrl ? imageUrl : demoImageUrl,
                bnarImgUrl: bannerImageUrl
                    ? bannerImageUrl
                    : demoBannerImageUrl,
                cast: screenplayBy ? screenplayBy : demoScreenplayBy,
                releaseYear: releaseDate ? releaseDate : demoReleaseDate,
                description: description,
                producedBy: directedBy,
                storyBy: storyBy,
            })
            .then(function () {
                Swal.fire({
                    title: 'Done!',
                    text: 'Move Post Done',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });
            })
            .catch(function (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
            });
    };

    return (
        <>
            <div>
                <div className="h-20 w-10"></div>
                <div className="md:mt-20 mt-16 myContainer px-2">
                    {' '}
                    <div className="relative overflow-hidden  mb-6">
                        <div className="ml-3">
                            <HeadingHTwo hTwo={title} />
                        </div>
                        <div className="border-primaryColor border-l-4 w-1 h-[100rem] absolute top-0 left-0"></div>
                    </div>
                    <div>
                        <form onSubmit={handalUploadMovies}>
                            <div className="relative mb-4 flex flex-wrap items-stretch">
                                <span
                                    className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                    id="basic-addon1">
                                    <FaImdb />
                                </span>
                                <input
                                    type="text"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Movie Name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    name="movieName"
                                    required
                                />
                            </div>

                            <div className="relative mb-4 flex flex-wrap items-stretch">
                                <input
                                    type="text"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Category"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name="category"
                                />
                                <span
                                    className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                    id="basic-addon2">
                                    Category
                                </span>
                            </div>

                            <div className="relative mb-4 flex flex-wrap items-stretch">
                                <span
                                    className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                    id="basic-addon1">
                                    <FaImdb />
                                </span>
                                <input
                                    type="text"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Short description"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    name="shortDis"
                                />
                            </div>

                            <label className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
                                Your vanity URL
                            </label>
                            <div className="relative mb-4 flex flex-wrap items-stretch">
                                <span
                                    className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                    id="basic-addon3">
                                    https://example.com/users/
                                </span>
                                <input
                                    type="text"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    id="basic-url"
                                    placeholder="Image Url"
                                    aria-describedby="basic-addon3"
                                    name="imageUrl"
                                />
                            </div>

                            <div className="relative mb-4 flex flex-wrap items-stretch">
                                <input
                                    type="text"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Banner Image URL"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name="bannerImageUrl"
                                />
                                <span
                                    className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                    id="basic-addon2">
                                    https://example.com/users/
                                </span>
                            </div>

                            <div className="relative mb-4 flex flex-wrap items-stretch">
                                <input
                                    type="text"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="DIRECTED BY"
                                    aria-label="Username"
                                    name="directedBy"
                                />
                                <span className="flex items-center whitespace-nowrap border border-x-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
                                    @
                                </span>
                                <input
                                    type="text"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="SCREENPLAY BY"
                                    aria-label="Server"
                                    name="screenplayBy"
                                />
                            </div>
                            <div className="relative mb-4 flex flex-wrap items-stretch">
                                <input
                                    type="text"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="STORY BY"
                                    aria-label="Username"
                                    name="storyBy"
                                />
                                <span className="flex items-center whitespace-nowrap border border-x-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
                                    @
                                </span>
                                <input
                                    type="text"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Release date"
                                    aria-label="Server"
                                    name="releaseDate"
                                />
                            </div>

                            <div className="relative flex flex-wrap items-stretch">
                                <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
                                    Description
                                </span>
                                <textarea
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Description..."
                                    name="description"
                                    aria-label="With textarea"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <input
                                    className="seconderBtn mt-4"
                                    type="submit"
                                    value="Upload It"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadMovies;
