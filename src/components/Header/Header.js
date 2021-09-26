import React from 'react';
import './Header.css'

// Show header component

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="#dashboard">Dashboard</a>
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
                <a href="?logout">Logout</a>
            </nav>
            <h1>New Employee <span>Hiring Dashboard</span></h1>
            <h3>Here is the complete list of applicants who applied for different role according to our recent advertisement in our official career site. <br /> See all the applicants basic informations and choose all the applicants you want to hire.</h3>
            <h2>Your total hiring budget is $50 Millions</h2>
        </div>
    );
};

export default Header;