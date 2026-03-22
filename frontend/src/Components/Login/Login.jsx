import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import './Login.css'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/login", {
                username,
                password
            });

            toast.success(res.data.message);

        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            } else {
                toast.error("Server error");
            }
        }
    }
    return (
        <div className='login-form'>
            <div className='login-container'>
                <h4 className='m-3 mb-5'>LOGIN</h4>
                <div className='m-3'>
                    <div className='flex-start'>Username</div>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='input'
                        autoFocus
                    />
                </div>
                <div className='m-3'>
                    <div className='flex-start'>Password</div>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='input'
                    />
                </div>
                <div>
                    <button
                        className='mt-4 mb-4 btn-dark login-button'
                        onClick={handleLogin}
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    )
}
