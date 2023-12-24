import React from 'react'
import Styles from './navigation.module.css'
import Link from 'next/link'
const navigation = () => {
  return (
    <header className={`${Styles.navigationHeader}`}>
      <div className={`${Styles.logo}`}>
        <p>ArtsNft</p>
      </div>
      <nav>
        <ul className={`${Styles.linksHead}`}>
          <li className={`${Styles.links}`}>
            <Link href="#">Home</Link>
          </li>
          <li className={`${Styles.links}`}>
            <Link href="#">About</Link>
          </li>
          <li className={`${Styles.links}`}>
            <Link href="#">Services</Link>
          </li>
          <li className={`${Styles.links}`}>
            <Link href="#">Portfolio</Link>
          </li>
          <li className={`${Styles.links}`}>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <button className={`${Styles.navButton}`}>
        <Link href="#">Connect Wallet</Link>
      </button>
    </header>
  )
}
// must contain Search option 

export default navigation
