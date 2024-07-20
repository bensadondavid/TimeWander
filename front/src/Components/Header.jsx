import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    const [search, setSearch] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [hamBtn, setHamBtn] = useState(false);

    const handleHamBtn = () => {
        setHamBtn(!hamBtn);
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ search })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="Header">
            <nav>
                <div className="first-nav">
                    <div className="title-btn">
                        <Link to='/'><h3>TimeWander</h3></Link>
                        {screenWidth <= 768 && (
                            <button className="nav-btn" onClick={handleHamBtn}>
                                <div className="line-container">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                    <div className="line3"></div>
                                </div>
                            </button>
                        )}
                    </div>
                    {(screenWidth > 768 || hamBtn) && (
                        <div className="links">
                            <Link to='/' className="a1">Home</Link>
                            <Link to='/register' className="a2">Register</Link>
                            <Link to='/login' className="a3">Login</Link>
                        </div>
                    )}
                </div>
                {(screenWidth > 768 || hamBtn) && (
                    <div className="searchbar">
                        <form method="POST" onSubmit={handleSubmit}>
                            <input type="text" name="search" value={search} placeholder="Search" onChange={handleSearch} />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;