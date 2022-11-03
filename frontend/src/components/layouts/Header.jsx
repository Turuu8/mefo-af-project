import React from 'react'
import '../../assets/styles/header.module.scss'
import classes from "../../assets/styles/header.module.scss"
export const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes.header_content}>
             <h2>METO AF</h2>
        </div>
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
          <ul>
            <li>
               <a href="/">ENG/</a>
               <a href="/">MON</a>
            </li>
            <li>
               <a href="/">BAG</a>
            </li>
            <li>
               <a href="/">LOGIN</a>
            </li>
          </ul>

        </nav>
      </header>
  )
}