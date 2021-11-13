import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardTable = () => {
    const { user } = useAuth()
    return (
        <tr className="">
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                    <div className="flex-shrink-0  mr-4 hidden sm:flex h-10 w-10">
                        <img className="h-10 w-10 rounded-full"
                            src={user?.photoURL}
                            alt="" />
                    </div>
                    <div className="">
                        <div className="text-sm leading-5 font-medium text-gray-900">{user?.displayName}
                        </div>
                        <div className="text-sm  leading-5 text-gray-500">{user?.email}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 hidden sm:flex py-5 whitespace-no-wrap  border-gray-200">
                <span
                    className="px-2  text-xs mt-2 leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </td>

            <td
                className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                Owner</td>
            <td
                className="px-3 sm:px-6 text-green-500 font-medium py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                Edit</td>
        </tr>
    );
};

export default DashboardTable;