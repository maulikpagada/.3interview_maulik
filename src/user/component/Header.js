import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <Link to="/doctor" className="nav-link scrollto">doctor</Link>
        </div>
    );
}

export default Header;