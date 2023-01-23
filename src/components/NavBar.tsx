import { Link } from 'gatsby'
import React from 'react'

export default function NavBar() {
    return (
        <nav><h1>PT Excel</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
