import React from 'react'
import "./MainContainer.css"
import Sidebar from './Sidebar'

function MainContainer({ children }) {
    return (
        <div className='main-container'>
            <Sidebar />
            <div className='main-section'>
                {children}
            </div>
        </div>
    )
}

export default MainContainer