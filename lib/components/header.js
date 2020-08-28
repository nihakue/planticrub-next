import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Nav from './nav'

import styles from './header.module.css'

const Header = () => {
  const title = "Planticrub Garden Design"
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Planticrub Garden Design" />
        <meta name="keywords" content="garden design, gardening, design" />
      </Head>
      <div className={styles.header}>
        <Link
          href="/"
        >
          <a className={styles.logo} style={{
            textDecoration: 'none',
          }}><img width="50px" src="/img/logo.png" alt="logo" /></a>
        </Link>
        <div className="logo">
          <h1>
            <Link
              href="/"
            >
              <a style={{
                textDecoration: 'none',
              }}>{title}</a>
            </Link>
          </h1>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default Header
