import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Operations Developer</title>
        <meta property="og:title" content="Regional Operations Developer" />
      </Helmet>
    </div>
  )
}

export default Home
