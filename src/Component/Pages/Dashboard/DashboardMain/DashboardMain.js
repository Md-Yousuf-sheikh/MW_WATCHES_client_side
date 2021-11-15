import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import useAuth from '../../../Hooks/useAuth';
import AddPost from '../../AddPost/AddPost/AddPost';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ManageProduct from '../../ManageProduct/ManageProduct/ManageProduct/ManageProduct';
import Payment from '../../Payment/Payment/Payment';
import DashboardDoc from '../DashboardDoc/DashboardDoc';
import SideBar from '../SideBar/SideBar';


const DashboardMain = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth()
    return (
        <div>
            <div className="bg-green-500  flex ">
                <div className="px-2 flex  justify-center text-white  space-x-3 py-4 cursor-pointer text-sm">
                    <Link to="/" className="flex text-gray-600">
                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <h6 className="">Home</h6>
                    </Link>
                    <Link to={`${url}`} className="flex text-gray-600">
                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                        </svg>
                        <h6 className="hidden md:flex">Dashboard</h6>
                    </Link>
                    {
                        admin && <>
                            <Link to={`${url}/makeAdmin`} className="flex text-gray-600">
                                <svg className="h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                </svg>
                                <h6 className="">Admin</h6>
                            </Link>
                            <Link to={`${url}/addPost`} className="flex text-gray-600">
                                <svg className="h-5 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                                <h6 className="">Post</h6>
                            </Link>
                            <Link to={`${url}/manageProduct`} className="flex text-gray-600">
                                <svg className="h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                </svg>
                                <h6 className="">Manage</h6>
                            </Link>
                        </>
                    }
                    <Link to={`${url}/payment`} className="flex text-gray-600">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                        </svg>
                        <h6 className="hidden md:flex">Payment</h6>
                    </Link>
                    {
                        user?.email && <button title="Loge Out" onClick={logOut}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    }
                    {
                        !user?.email && <Link title="Loge In" className="" to="/login" onClick={logOut}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </Link>
                    }
                </div>
            </div >
            <div className="flex min-h-screen bg-gray-200">
                <div className="fixed   opacity-50 transition-opacity lg:hidden"></div>

                <Switch>
                    <Route exact path={`${path}`}>
                        <DashboardDoc />
                    </Route>
                    {
                        admin && <div>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </AdminRoute>
                            <AdminRoute path={`${path}/addPost`}>
                                <AddPost />
                            </AdminRoute>
                            <Route path={`${path}/manageProduct`}>
                                <ManageProduct />
                            </Route>
                        </div>
                    }
                    <Route path={`${path}/dashboardDoc`}>
                        <DashboardDoc />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                </Switch>

            </div>
        </div>
    )
};

export default DashboardMain;