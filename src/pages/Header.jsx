import React from 'react'
import './header.css';
import NavListItem from '../components/NavListItem' ///importing component
import navListData from '../data/navListData'
import Search from '../components/Search';
import Button from '../components/Button';



function Header() {
  return (
    <header>
        <a href="/" className="logo">
            Bojo
        </a>
        <ul className="nav">
            {
                navListData.map(nav=>(
                    <NavListItem key={nav._id} nav={nav} /> ///mapping all the components from navlistdata
                ))
            }
        </ul>
        <Search />
        <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="Sign In"/>


    </header>
  )
}

export default Header