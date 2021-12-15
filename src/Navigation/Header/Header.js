import Link from "./Link";
import React from "react";
import "./styles/Header.css";

const Header = () => {
    return (
        <ul className="navigationBar">
            <li><a href="/" className="item">Wikipedia API</a></li>
            <li><a href="/YT" className="item">YouTube API</a></li>
        </ul>
    );
}

export default Header;