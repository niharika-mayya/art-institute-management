import React, { useState } from 'react'
import "./Sidebar.css"
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from "../Redux/userSlice"
import { useNavigate} from 'react-router-dom'
function Sidebar() {
    const { username, userType } = useSelector((state) => state.user)
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token")
        dispatch(clearUser())
        navigate("/")
    }

    return (
        <>
            {!toggle && (
                <div className="hamburger" onClick={() => setToggle(!toggle)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            )}
            {toggle && <div className="overlay" onClick={() => setToggle(false)}></div>}

            <div className={`sidebar-container ${toggle ? "open" : ""}`}>
                <div className='profile'>
                    <div className='profile-image cursor-default'>
                        {username?.charAt(0).toUpperCase()}
                    </div>
                    <div className='m-3'>
                        <div className='profile-name bold-600 cursor-default' style={{ fontSize: "18px" }}>{username ? username.toUpperCase() : ""}</div>
                        <div className='profile-name cursor-default'>{userType ? userType.charAt(0).toUpperCase() + userType.slice(1) : ""}</div>
                    </div>
                </div>
                <hr className='hr-line' />
                <div className='nav-options'>
                    <div className='nav-option-item cursor-default'>Dashboard</div>
                    <div className='nav-option-item cursor-default'>Institute</div>
                    <div className='nav-option-item cursor-default'>Settings</div>
                    <div className='nav-option-item cursor-default' onClick={handleLogout}>Logout</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
