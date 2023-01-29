import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from "../contextLib";
// Css
import "./Css/Nav.scss"
// Images
import logo from "./res/Logo.svg"

// Modules
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';

const Nav = () => {
    const [navigation, setNavigaion] = useState("Err")
    const [searchData, setSearchData] = useState("");
    const [drawer, setdrawer] = useState(false)
    const {search, setSearch } = useAppContext()

    useEffect(() => {
        setNavigaion(window.location.pathname)
    }, [])

    return (
        <div className="Nav">
            <img className="Logo" src={logo} alt="Book" />
            <div className="SearchBar">
                <ion-icon name="search-outline"></ion-icon>
                <input className="" type="text" name="SearchBook" id="BookSearch" placeholder='Enter Book' value={searchData} onChange={e => setSearchData(e.target.value)} />
                <button className="SearchEnter" onClick={()=>setSearch(!search)}><ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div>
            <div className="Menu">
                <Link to="/"><span className={navigation === "/" ? "MenuItems Dark" : "MenuItems"}>Home</span></Link>
                <Link to="/books"><span className={navigation === "/books" ? "MenuItems Dark" : "MenuItems"}>Books</span></Link>
                <Link to="/notes"><span className={navigation === "/notes" ? "MenuItems Dark" : "MenuItems"}>Notes</span></Link>
                <Link to="/questions"><span className={navigation === "/questions" ? "MenuItems Dark" : "MenuItems"}>Questions</span></Link>
                <Link to="/user"><span className={navigation === "/user" ? "MenuItems Dark" : "MenuItems"}>User</span></Link>
            </div>
            <Button onClick={() => setdrawer(true)} className="Menu_btn"><MenuIcon sx={{ color: "#000", fontSize: 33 }} /></Button>
            <Drawer
                anchor="right"
                open={drawer}
                onClose={() => setdrawer(false)}
                className="Drawer"
            >
                <div className="Menu_Side">
                    <div className="Menu_Side_covered">
                        <img className="Logo" src={logo} alt="Book" />
                        <Button onClick={() => setdrawer(false)} className="Menu_btn"><ClearIcon sx={{ color: "#000", fontSize: 33 }} /></Button>
                    </div>
                    <Link to="/"><span className={navigation === "/" ? "MenuItems Dark" : "MenuItems"}>Home</span></Link>
                    <Link to="/books"><span className={navigation === "/books" ? "MenuItems Dark" : "MenuItems"}>Books</span></Link>
                    <Link to="/notes"><span className={navigation === "/notes" ? "MenuItems Dark" : "MenuItems"}>Notes</span></Link>
                    <Link to="/questions"><span className={navigation === "/questions" ? "MenuItems Dark" : "MenuItems"}>Questions</span></Link>
                    <Link to="/user"><span className={navigation === "/user" ? "MenuItems Dark" : "MenuItems"}>User</span></Link>
                </div>
            </Drawer>
        </div>
    )
}

export default Nav