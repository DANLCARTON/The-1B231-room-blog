import "../styles/Navbar.css"
import {Link } from "react-router-dom"

const Navbar = () => {
    return <nav className='db-navbar'>
        <h1>THE 1B231 ROOM BLOG</h1>
        <div className="db-links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
    </nav>
}

export default Navbar