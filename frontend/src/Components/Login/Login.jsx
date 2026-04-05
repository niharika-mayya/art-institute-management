import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../Redux/userSlice';
import { useDispatch } from "react-redux"
import { jwtDecode } from "jwt-decode"
import eyeIcon from "../../assets/eye-icon.svg"
import eyeOffIcon from "../../assets/eye-off-icon.svg"
import './Login.css'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/login", {
                username,
                password
            });

            //set token
            localStorage.setItem("token", res.data.token)

            //decode token
            const decoded = jwtDecode(res.data.token);

            // update redux
            dispatch(setUser({
                username: decoded.username,
                userType: decoded.userType
            }));

            toast.success(res.data.message);
            navigate("/dashboard")
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                toast.error("Server error");
            }
        }
    }
    return (
        <div className='login-form'>
            <form autoComplete='off' onSubmit={handleLogin}>
                <div className='login-container'>
                    <h4 className='m-3 mb-5'>LOGIN</h4>
                    <div className='m-3'>
                        <div className='flex-start'>Username</div>
                        <div className='input-wrapper'>
                            <input
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='input-field'
                                autoFocus
                                autoComplete='off'
                                required
                            />
                        </div>
                    </div>

                    <div className='m-3'>
                        <div className='flex-start'>Password</div>
                        <div className='input-wrapper'>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='input-field'
                                autoComplete='new-password'
                                required
                            />
                            <img
                                src={showPassword ? eyeOffIcon : eyeIcon}
                                className='eye-icon'
                                onClick={() => setShowPassword(!showPassword)}
                            />

                        </div>
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
