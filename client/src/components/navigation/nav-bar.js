import React from "react";
import NavTabs from './nav-tabs'
import NavButtons from './nav-buttons'
import '../../styles/navbar.css'

const NavBar = () => {

    return (
        <>
        <div className='nav-bar-container'>
            <div className='nav-bar'>
                    <NavTabs />
                    <NavButtons />
            </div>
        </div>
            <div className='nav-bar-buffer' />
        </>
    )
}

export default NavBar