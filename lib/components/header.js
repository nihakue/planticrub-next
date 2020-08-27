import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Nav from './nav'

import './header.module.css'

const Header = () => {
  const title = "Planticrub Garden Design"
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Planticrub Garden Design" />
        <meta name="keywords" content="garden design, gardening, design" />
      </Head>
      <div className="header">
        <Link
          href="/"
        >
          <a style={{
            textDecoration: 'none',
          }}><img src="/img/logo.png" alt="logo" /></a>
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
