import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Upload = () => {
    const [previewImage, setPreviewImage] = useState(
        'https://picsum.photos/500/400'
    );

    const handleInputChange = (event) => {
        setPreviewImage(event.target.value);
    };

    // upload files
    const handalUploadMovies = (e) => {
        e.preventDefault();
        const from = e.target;
        const productCode = from.productCode.value;
        const name = from.name.value;
        const price = from.price.value;
        // const ImgUrl = from.ImgUrl.value;
        const status = from.status.value;
        const brand = from.brand.value;
        const dimension = from.dimension.value;
        const weight = from.weight.value;
        const mainCamera = from.mainCamera.value;
        const category = from.category.value;
        const selfieCamera = from.selfieCamera.value;
        const description = from.description.value;
        const batteryInfo = from.batteryInfo.value;
        const otherInfo = from.otherInfo.value;

        axios
            .post('http://localhost:5000/products', {
                productCode: productCode,
                name: name ? name : 'Product Name',
                price: price ? price : '12000 tk',
                ImgUrl: previewImage,
                status: status ? status : 'In Stock',
                brand: brand ? brand : 'Brand Name',
                dimension: dimension ? dimension : '159.9 x 76.7 x 8.3 mm',
                weight: weight ? weight : '221 g',
                category: category ? category : 'Phones & Tablets',
                mainCamera: mainCamera
                    ? mainCamera
                    : '48 MP(wide) | 12 MP (periscope telephoto) | 12 MP (ultrawide) | TOF 3D LiDAR scanner (depth) |Dual-LED dual-tone flash, HDR (photo/panorama) | 4K, 1080p, Dolby Vision HDR , ProRes, Cinematic mode , 3D (spatial) video',
                selfieCamera: selfieCamera
                    ? selfieCamera
                    : '12 MP (wide) | SL 3D | HDR | Cinematic mode | 4K@24/25/30/60fps, 1080p, gyro-EIS',
                description: description
                    ? description
                    : 'Meet the Apple iPhone 15 Pro Max, a game-changing device that redefines the smartphone landscape and sets new industry standards. With its pioneering titanium construction, it sets a new standard for durability and elegance. Powered by a cutting-edge 3nm processor, this phone delivers unparalleled performance. The ultimate camera system, equipped with advanced features, promises magnificent photography and videography. Its high-resolution display offers a visual feast, and the optimized battery with a Type-C charger ensures convenience. Undoubtedly, the iPhone 15 Pro Max represents the Apex of smartphone innovation, making it the best phone to date.',
                batteryInfo: batteryInfo
                    ? batteryInfo
                    : 'Li-Ion 4441 mAh | Non-removable | Wired Charging | 15W wireless (MagSafe) | 7.5W wireless (Qi)',
                otherInfo: otherInfo
                    ? otherInfo
                    : 'USB Type-C 3.2 Gen 2 | Face ID | Emergency SOS via satellite | IP68 dust/water resistant',
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
            <div className="">
                <div>
                    <form
                        onSubmit={handalUploadMovies}
                        className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
                        <div className=" row-span-4">
                            <div className="text-base font-semibold text-center underline">
                                <p>Image Preview</p>
                            </div>{' '}
                            <img
                                src={previewImage}
                                alt="Image preview"
                                className=""
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="name"
                                className="text-xl font-semibold ">
                                Name
                            </label>
                            <hr />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="customInputStyle mt-4"
                                placeholder="Product Name "
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="price"
                                className="text-xl font-semibold ">
                                Product Price
                            </label>
                            <hr />
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="customInputStyle mt-4"
                                placeholder="Price"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="ImgUrl"
                                className="text-xl font-semibold ">
                                Image Url
                            </label>
                            <hr />
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="ImgUrl"
                                id="ImgUrl"
                                className="customInputStyle mt-4"
                                placeholder="Picture Url"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="productCode"
                                className="text-xl font-semibold">
                                Product Code*
                            </label>
                            <hr />
                            <input
                                required
                                type="text"
                                name="productCode"
                                id="productCode"
                                className="customInputStyle mt-4"
                                placeholder="pc01"
                            />
                        </div>

                        <div className="col-span-1 flex items-center gap-3">
                            <label
                                htmlFor="status"
                                className="text-xl font-semibold">
                                Status:
                            </label>
                            <input
                                type="text"
                                name="status"
                                id="status"
                                className="customInputStyle"
                                placeholder="In Stock"
                            />
                        </div>
                        <div className="col-span-1 flex items-center gap-3 ">
                            <label
                                htmlFor="brand"
                                className="text-xl font-semibold">
                                Brand:
                            </label>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                className="customInputStyle "
                                placeholder="Brand"
                            />
                        </div>
                        <div className="col-span-1 flex items-center gap-3">
                            <label
                                htmlFor="dimension"
                                className="text-xl font-semibold ">
                                Dimension:
                            </label>
                            <input
                                type="text"
                                name="dimension"
                                id="dimension"
                                className="customInputStyle "
                                placeholder="159.9 x 76.7 x 8.3 mm"
                            />
                        </div>
                        <div className="col-span-1 flex items-center gap-3">
                            <label
                                htmlFor="weight"
                                className="text-xl font-semibold ">
                                Weight:
                            </label>
                            <input
                                type="text"
                                name="weight"
                                id="weight"
                                className="customInputStyle "
                                placeholder="221 g"
                            />
                        </div>
                        <div className="col-span-1 flex items-center gap-3">
                            <label
                                htmlFor="weight"
                                className="text-xl font-semibold ">
                                Category:
                            </label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                className="customInputStyle "
                                placeholder="Phones & Tablets"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label
                                htmlFor="mainCamera"
                                className="text-xl font-semibold ">
                                Main Camera
                            </label>
                            <hr />
                            <input
                                type="text"
                                name="mainCamera"
                                id="mainCamera"
                                className="customInputStyle mt-4"
                                placeholder="Main Camera"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label
                                htmlFor="selfieCamera"
                                className="text-xl font-semibold ">
                                Selfie Camera
                            </label>
                            <hr />
                            <input
                                type="text"
                                name="selfieCamera"
                                id="selfieCamera"
                                className="customInputStyle mt-4"
                                placeholder="Selfie Camera"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label
                                htmlFor="description"
                                className="text-xl font-semibold ">
                                Description
                            </label>
                            <hr />
                            <textarea
                                type="text"
                                name="description"
                                id="otherInfo"
                                className="customInputStyle mt-4"
                                placeholder="Description"></textarea>
                        </div>
                        <div className="col-span-1 flex justify-center items-center gap-3">
                            <label
                                htmlFor="batteryInfo"
                                className="text-xl font-semibold ">
                                Battery Info:
                            </label>
                            <input
                                type="text"
                                name="batteryInfo"
                                id="batteryInfo"
                                className="customInputStyle "
                                placeholder="Battery Info"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center items-center gap-3">
                            <label
                                htmlFor="otherInfo"
                                className="text-xl font-semibold ">
                                Other Info:
                            </label>
                            <input
                                type="text"
                                name="otherInfo"
                                id="otherInfo"
                                className="customInputStyle"
                                placeholder="Other Features / Info"
                            />
                        </div>

                        <div className="md:col-span-2 mx-auto mt-4">
                            <input
                                type="submit"
                                value="Upload Prodact"
                                className="seconderBtn"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Upload;
