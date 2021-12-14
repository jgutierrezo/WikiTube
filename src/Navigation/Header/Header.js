import { style } from "@mui/system";
import React from "react";
import Link from "./Link";
import "./styles/Header.css";

const Header = () => {
    return (
        <ul className="navigationBar">
            <li><Link href="/" className="item">Wikipedia API</Link></li>
            <li><Link href="/YT" className="item">YouTube API</Link></li>
        </ul>
    );
}

export default Header;