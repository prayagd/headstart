import React from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';



const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><NavLink to = "/Coding">Coding</NavLink></li>
                <li><NavLink to = "/Writing">Writing</NavLink></li>
                <li><NavLink to = "/Marketing">Digital Marketing</NavLink></li>
                <li><NavLink to = "/Health">Health</NavLink></li>
                <li><NavLink to = "/Crypto">Digital Currency</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar)