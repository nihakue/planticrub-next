import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Nav from './nav'

import styles from './header.module.css'

function Header() {
  const title = "Planticrub Garden Design"
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Planticrub Garden Design" />
        <meta name="keywords" content="garden design, gardening, design" />
      </Head>
      <header className="flex align-middle justify-center py-4 text-blue-500">
        <Link
          href="/"
        >
          <a className={styles.logo} style={{
            textDecoration: 'none',
          }}><img width="50px" src="/img/logo.png" alt="logo" /></a>
        </Link>
        <div className="logo">
          <h1 className="text-4xl font-thin">
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
      </header>
    </React.Fragment>
  )
}

export default Header
