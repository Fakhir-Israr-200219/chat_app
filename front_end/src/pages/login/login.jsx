import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Login to Your Account</h1>
                <form className="space-y-6" onSubmit={onFormSubmit}>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-3 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            placeholder="Enter your email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-3 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            placeholder="Enter password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-purple-500 font-medium hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
