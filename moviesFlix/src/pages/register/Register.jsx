import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const loginRegInfo = useContext(AuthContext);
    const { singUp } = loginRegInfo || {};

    // register function call
    const handaleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;

        if (password.length < 6) {
            // toast('Password less than 6 Character.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            // toast('Password must least one capital letter.');
            return;
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            // toast('Password must at least one special character.');
            return;
        }

        singUp(email, password)
            .then(() => {
                // Signed up Successful
                console.log('Signed up Successful');
                form.reset();
            })
            .catch((error) => {});
    };

    return (
        <>
            <section className="h-screen">
                <div className="h-full">
                    {/* Left column container with background */}
                    <div className="g-6 flex h-full flex-wrap flex-row-reverse items-center justify-center lg:justify-between">
                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-6/12">
                            <img
                                src="https://i.ibb.co/Z105HpM/login-page-banar-1.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>

                        {/* Right column container */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
                            <form
                                onSubmit={handaleRegister}
                                className="sm:px-16 lg:ml-28">
                                {/* Sign in section */}
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="mb-0 mr-4 text-lg">
                                        Sign in with
                                    </p>

                                    {/* Facebook  */}
                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className="
                                        hover:bg-slate-100
                                        mx-1 h-9 w-9 rounded-full  uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 
                                        ease-in-out  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] border">
                                        {/* Facebook  */}

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </button>

                                    {/* Twitter */}
                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className=" hover:bg-slate-100
                                        mx-1 h-9 w-9 rounded-full  uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] border">
                                        {/* Twitter */}

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </button>

                                    {/* Linkedin */}
                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className=" hover:bg-slate-100
                                        mx-1 h-9 w-9 rounded-full uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] border">
                                        {/* Linkedin */}

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Separator between social media sign in and email/password sign in */}
                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p className="mx-4 mb-0 text-center font-semibold dark:text-black">
                                        Or
                                    </p>
                                </div>

                                {/* full name */}
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer customInputStyle"
                                        placeholder="Full Name"
                                        name="name"
                                    />
                                </div>
                                {/* Email input */}
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer customInputStyle"
                                        placeholder="Email address"
                                        name="email"
                                        required
                                    />
                                </div>

                                {/* phon number  */}
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer customInputStyle"
                                        placeholder="Phone Number"
                                        name="phone"
                                    />
                                </div>

                                {/* Password input  */}
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init>
                                    <input
                                        type="password"
                                        className=" peer customInputStyle"
                                        id="exampleFormControlInput22"
                                        placeholder="Password"
                                        name="password"
                                        required
                                    />
                                </div>

                                <div className="mb-6 flex items-center justify-between">
                                    {/* Remember me checkbox */}
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="customChackBoxStyle"
                                            type="checkbox"
                                            value=""
                                            id="exampleCheck2"
                                        />
                                        <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                                            Remember me
                                        </label>
                                    </div>

                                    {/* Forgot password link */}
                                    <a href="#!">Forgot password?</a>
                                </div>

                                {/* Login button  */}
                                <div className="text-center lg:text-left">
                                    <input
                                        type="submit"
                                        value="Register"
                                        className="seconderBtn"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    />

                                    {/* Register link */}
                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        {`Have an account?`}
                                        <Link
                                            to="/login"
                                            className=" px-1 transition duration-150 ease-in-out text-primaryColor/90 hover:bg-primaryColor/10 focus:text-danger-600 active:text-danger-700">
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
