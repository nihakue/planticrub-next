import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div className="font-sans">
    <div className="max-w-screen-lg mx-auto px-6 mb-10">
      <Header />
      <main>
        {children}
      </main>
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
