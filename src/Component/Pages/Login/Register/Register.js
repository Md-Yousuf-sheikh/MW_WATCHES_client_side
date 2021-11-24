import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Sheard/Header/Header/Header';

const Register = () => {
    const { registerWithEmail, user, GoogleSinInUser } = useAuth();
    const [inputData, setInputData] = useState({});
    const [passError, setPassError] = useState(false);
    const name = `${inputData.fastName} ${inputData.lastName}`;
    const location = useLocation()
    const navigate = useNavigate()


    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = { ...inputData };
        newInputData[field] = value;
        setInputData(newInputData);
    }
    const googleSinIn = () => {
        GoogleSinInUser(location, navigate)
    }


    const handelRegisterSubmit = e => {
        e.preventDefault();
        if (inputData.password !== inputData.password_2) {
            setPassError(true)
            return
        } else {
            setPassError(false)
        }
        registerWithEmail(inputData.email, inputData.password, name, location, navigate);
    }
    return (
        <>
            <Header />
            <div className="font-mon">
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div
                                className="w-full h-auto  hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                style={{ "backgroundImage": "url('https://i1.wp.com/nowa.watch/wp-content/uploads/2018/10/NOWA_Shaper_Smartwatch_Ultra_Thin_Black.jpeg?fit=1080%2C1080&ssl=1')" }}
                            >
                            </div>
                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                                <form onSubmit={handelRegisterSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                                First Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                name='fastName'
                                                onBlur={handelOnBlur}
                                                placeholder="First Name"
                                                required
                                            />
                                        </div>
                                        <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                                Last Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                type="text"
                                                name="lastName"
                                                onBlur={handelOnBlur}
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            name='email'
                                            onBlur={handelOnBlur}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                                                Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border focus:border-yellow-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type="password"
                                                name='password'
                                                onBlur={handelOnBlur}
                                                placeholder="******************"
                                                required
                                            />

                                        </div>

                                        <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                                Confirm Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm focus:border-yellow-400 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="c_password"
                                                type="password"
                                                name='password_2'
                                                onBlur={handelOnBlur}
                                                placeholder="******************"
                                            />
                                        </div>
                                    </div>
                                    {/* Password Error  */}
                                    {passError &&
                                        <div className="bg-red-200 px-6 py-2  my-2 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                                                ></path>
                                            </svg>
                                            <span className="text-red-800 text-sm"> Password not match! </span>
                                        </div>
                                    }
                                    {
                                        user.email &&
                                        <div className="bg-green-200 px-6 py-2  my-2 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4">
                                            <svg className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className="text-green-800 text-sm"> Register Successfully ! </span>
                                        </div>
                                    }
                                    {/* Password Error  */}
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            to="/login"
                                        >
                                            Already have an account? Login!
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

export default Register;