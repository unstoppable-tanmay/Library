import React,{useState } from 'react'
import "./styles/Nav.scss"

import logo from "./res/Logo.svg"
const Nav = (props) => {
    var value = props.value;
    const [search,setSearch] = useState("");
    return (
        <div className="Nav flex items-center justify-between w-11/12 h-16 mt-3">
            <img className="Logo w-11 h-11 flex" src={logo} alt="Book" />
            <div className="SearchBar px-3 py-1.5 rounded-full bg-slate-100 flex gap-4 shadow-md">
                <div className="SearchIcon text-2xl flex justify-center items-center">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                <input className="max-w-sm w-72 bg-slate-100 outline-none text-1xl flex items-center font-medium tracking-wide antialiased capitalize" type="text" name="SearchBook" id="BookSearch" placeholder='Enter Book' value={search} onChange={e=>setSearch(e.target.value)}/>
                <button className={`${!search&&"invisible"} flex duration-1000 p-1 -mr-1 items-center justify-center rounded-full bg-blue-400 text-white text-2xl`}><ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div>  
            <div className="Menu xl:flex gap-12 text-xl font-normal text-gray-400 hidden">
                <span className={`MenuItems cursor-pointer hover:-translate-y-1 duration-300 ${value===1&&"text-slate-900"}`}>Home</span>
                <span className={`MenuItems cursor-pointer hover:-translate-y-1 duration-300 ${value===2&&"text-slate-900"}`}>Books</span>
                <span className={`MenuItems cursor-pointer hover:-translate-y-1 duration-300 ${value===3&&"text-slate-900"}`}>Notes</span>
                <span className={`MenuItems cursor-pointer hover:-translate-y-1 duration-300 ${value===4&&"text-slate-900"}`}>Questions</span>
                <span className={`MenuItems cursor-pointer hover:-translate-y-1 duration-300 ${value===5&&"text-slate-900"}`}>About</span>
            </div>
        </div>
    )
}

export default Nav