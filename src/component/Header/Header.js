import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <section>
            <div className="header-div">
                <h1>The Meal DB</h1>
                <nav>
                    <a href="https://www.google.com">Home</a>
                    <a href="https://facebook.com">FaceBook</a>
                    <a href="https://linkdin.com">LinkDin</a>
                </nav>
                <div>
                    <input type="text" placeholder="type your favourite food" />
                    <button className="Search">Search</button>
                </div>
            </div>
        </section>
    );
};

export default Header;