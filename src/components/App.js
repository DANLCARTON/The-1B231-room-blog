import logo from '../logo.svg';
import '../styles/App.css';
import Navbar from './Navbar.js';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Page404 from './Page404';
import Footer from "./Footer"

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<Create />} /> {/* ça marche très bien comme ça mais dans le tuto il a besoin de mettre exact path parce que ça créé des confusions. il est en v5 ce demeuré */}
                        <Route path="/blogs/:id" element={<BlogDetails />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;