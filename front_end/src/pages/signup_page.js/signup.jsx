import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signupUser } from '../../apiCells/auth';


const Signup = () => {


    const [user ,setUser] = useState({
        first_name:'',
        last_name:'',
        email:'',
        paswword:''
    });
    async function onFormSubmit(e){
        e.preventDefault();
        let responce = null
        try {
            responce = await signupUser(user); 
            if(responce.success){
                alert(responce.message);
            }else{
                alert(responce.message);
            }
        } catch (error) {
            alert(responce.message);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Create Your Account</h1>
                <form className="space-y-6" onSubmit={onFormSubmit}>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="mt-1 p-3 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            placeholder="Enter First Name"
                            value={user.first_name}
                            onChange={(e)=>{setUser({...user, first_name:e.target.value})}}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="mt-1 p-3 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            placeholder="Enter Last Name"
                            value={user.last_name}
                            onChange={(e)=>{setUser({...user, last_name:e.target.value})}}
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-3 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            placeholder="Enter email"
                            value={user.email}
                            onChange={(e)=>{setUser({...user, email:e.target.value})}}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-3 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            placeholder="Enter password Here"
                            value={user.paswword}
                            onChange={(e)=>{setUser({...user, paswword:e.target.value})}}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition p-13"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{' '}
                    <Link to="/login" className="text-purple-500 font-medium hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
