import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="asdadd">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="asdadd">People</a>
                </li>
                <li>
                    <a href="asdadd">Planets</a>
                </li>
                <li>
                    <a href="asdadd">Starships</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;