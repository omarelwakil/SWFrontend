import React, { useState } from 'react';
import PropTypes from "prop-types"
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

/**
 * Component for secondary navbar
 *
 * @component
 * @example
 * const dataToSend = [
        { title: "About", path: "/people/" + userToRenderId, selected: true },
        { title: "Photostream", path: "/photos/" + userToRenderId, selected: false },
        { title: "Albums", path: "/photos/" + userToRenderId + "/albums", selected: false },
        { title: "Faves", path: "/photos/" + userToRenderId + "/favorites", selected: false }
    ];
 * const position = "position-static";
 * return (
 *   <Navbar items={dataToSend} position={position} />
 * )
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

Navbar.propTypes = {
    /**
     * User's id
     */
    items: PropTypes.object.isRequired,
    position: PropTypes.string
}

Navbar.defaultProps = {
    items: [
        { title: "About", path: "/people/60b7df35f8941e0012b98eec", selected: true },
        { title: "Photostream", path: "/photos/60b7df35f8941e0012b98eec", selected: false },
        { title: "Albums", path: "/photos/60b7df35f8941e0012b98eec/albums", selected: false },
        { title: "Faves", path: "/photos/60b7df35f8941e0012b98eec/favorites", selected: false }
    ]
}

export default Navbar;
