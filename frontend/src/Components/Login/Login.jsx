import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../Redux/userSlice';
import { useDispatch } from "react-redux"
import './Login.css'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/login", {
                username,
                password
            });

            toast.success(res.data.message);
            //update global state
            dispatch(setUser({
                username: username,
                userType: res.data.userType
            }))

            navigate("/dashboard")
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
            <form onSubmit={handleLogin}>
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
                            required
                        />
                    </div>
                    <div className='m-3'>
                        <div className='flex-start'>Password</div>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='input'
                            required
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='mt-4 mb-4 btn-dark login-button'
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
