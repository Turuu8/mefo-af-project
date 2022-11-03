import React from 'react'
import '../../assets/styles/header.module.scss'
import classes from "../../assets/styles/header.module.scss"
export const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes.header_content}>
             <h2 className= {classes.header_content_logo}>mepo af</h2>
       
        <nav className={classes.header_content_nav}>
          <ul>
            <li>
               <a href="/">ABOUT</a>
            </li>
            <li>
               <a href="/">PRODUCT</a>
            </li>
            <li>
               <a href="/">CONTACT</a>
            </li>
          </ul>
          <button> ENG/</button>
          <button>MON</button>
          <button>BAG</button>
          <button>LOGIN</button>

        </nav>
        </div>
      </header>
  )
}