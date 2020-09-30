import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Nav from './Nav'

function Header() {
  const title = "Planticrub Garden Design"
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Planticrub Garden Design" />
        <meta name="keywords" content="garden design, gardening, design" />
      </Head>
      <header className="flex justify-between py-6 text-blue-500">
        <Link
          href="/"
        >
          <a className="flex text-lg lg:text-4xl font-thin">
            <img width="50px" src="/img/logo.png" alt="logo" />
            {title}
          </a>
        </Link>
        <Nav />
      </header>
    </React.Fragment>
  )
}

export default Header
