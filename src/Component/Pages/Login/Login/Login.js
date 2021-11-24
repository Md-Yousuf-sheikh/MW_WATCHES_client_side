import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Sheard/Header/Header/Header';

const Login = () => {
    const { sinUpWithEmail, error, user, GoogleSinInUser } = useAuth()
    const [inputData, setInputData] = useState({});
    const [fireError, setFireError] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = { ...inputData };
        newInputData[field] = value;
        setInputData(newInputData);
    }
    const handelSinIn = e => {
        e.preventDefault();
        sinUpWithEmail(inputData.email, inputData.password, location, navigate)
        console.log(inputData.email, inputData.password);
        console.log(error);
        if (error) {
            setFireError(true)
        }
        if (user.email) {
            setFireError(false)
        }

    }
    const googleSinIn = () => {
        GoogleSinInUser(location, navigate)
    }
    return (
        <>
            <Header />
            <div className="font-mon">
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                                style={{ "backgroundImage": "url('https://i1.wp.com/nowa.watch/wp-content/uploads/2018/10/NOWA_Shaper_Smartwatch_Ultra_Thin_Black.jpeg?fit=1080%2C1080&ssl=1')" }}
                            ></div>
                            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>

                                <form onSubmit={handelSinIn} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                                            Your Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 hover:shadow-md border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            name="email"
                                            onBlur={handelOnBlur}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                                            Your Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border hover:shadow-md rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            name="password"
                                            onBlur={handelOnBlur}
                                            placeholder="******************"
                                            required
                                        />

                                    </div>
                                    <div className="mb-4">
                                        <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                        <label className="text-sm" for="checkbox_id">
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                    {
                                        fireError && <div className="bg-red-200 px-6 py-2  my-2 rounded-md text-lg flex items-center mx-auto">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                                                ></path>
                                            </svg>
                                            <span className="text-red-800 text-sm"> No account match! </span>
                                        </div>
                                    }
                                    {
                                        !fireError && user.email && <div className="bg-green-200 px-6 py-2  my-2 rounded-md text-lg flex items-center mx-auto">
                                            <svg className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className="text-green-800 text-sm"> Login Success full ! </span>
                                        </div>
                                    }
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            to="/register"
                                        >
                                            Create an Account!
                                        </Link>
                                    </div>
                                    <div className="text-center">
                                        <Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            to="/login"
                                        >
                                            Forgot Password?
                                        </Link> <br />
                                        <button onClick={googleSinIn} className="text-2xl text-center mt-2 hover:text-blue-200 text-blue-500"><i class="fab fa-google"></i></button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;