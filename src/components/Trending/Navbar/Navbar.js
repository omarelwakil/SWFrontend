import React, { useState } from 'react';
import './Navbar.css'
/**
 * Component that renders secondary navbar of the user's photos section
 * No internal components
 * @component 
 * @type Component
 * @param {Object} items Object that holds multiple links of the navbar 
 * @returns <Navbar 
 *              items={dataToSend} />
 */

const Navbar = (props) => {
    const [items] = useState(props.items);
    const navbarTestClasses = "custom-navbar " + props.position;
    return (
        <nav data-testid="navbartest" className={navbarTestClasses}>
            <div className="custom-container">
                <ul className="custom-navbar-ul">
                    {items.map((item, index) => {
                        const isSelected = item.selected ? "selected" : null;
                        return (
                            <li key={index}>
                                <a id="navbar-item-tag" href={item.path} className={isSelected}>{item.title}</a>
                            </li>
                        );
                    })}

                    {/* <li><a href="/photos/tags" className="selected">Trending</a></li> */}
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
