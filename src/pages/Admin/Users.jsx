"use client"

import { useState } from "react"
import { RiUserUnfollowLine } from "react-icons/ri"
import Sidebar from "./Sidebar"

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Customer" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer" },
    ])

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    return (
        <div className="p-6 mt-20">
            <Sidebar />
            <h1 className="text-3xl text-white font-semibold mb-4">Users</h1>
            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={() => deleteUser(user.id)} className="text-red-600 hover:text-red-900">
                                        <RiUserUnfollowLine className="inline-block" /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users

