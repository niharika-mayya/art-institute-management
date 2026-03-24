import React, { useState } from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux'

function Sidebar() {
    const { username, userType } = useSelector((state) => state.user)
    const [toggle, setToggle] = useState(false)

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
                    <div className='profile-image'>
                        {username?.charAt(0).toUpperCase()}
                    </div>
                    <div className='m-3'>
                        <div className='profile-name bold-600' style={{ fontSize: "18px" }}>{username.toUpperCase()}</div>
                        <div className='profile-name'>{userType.charAt(0).toUpperCase() + userType.slice(1)}</div>
                    </div>
                </div>
                <hr className='hr-line' />
                <div className='nav-options'>
                    <div className='nav-option-item'>Dashboard</div>
                    <div className='nav-option-item'>Institute</div>
                    <div className='nav-option-item'>Settings</div>
                    <div className='nav-option-item'>Logout</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
