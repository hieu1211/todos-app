import React from 'react'
import PropTypes from 'prop-types'
import './NavBar.scss'

function NavBar(props) {
    return (
        <div className="nav-container">
            <nav>
                <h1>HieuPro</h1>
                <ul>
                    <li>Login</li>
                </ul>
            </nav>
        </div>
    )
}

NavBar.propTypes = {

}

export default NavBar

