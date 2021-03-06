import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import Navbar from './Navbar'

const TemplateWrapper = ({ isNav, children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <script src="https://kit.fontawesome.com/f8964246ec.js" crossorigin="anonymous"></script>

        <link
          href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <link 
          rel="manifest"
          href={`${withPrefix('/')}site.webmanifest`}
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/android-chrome-512x512.png`}
        />
      </Helmet>
      {isNav ? <Navbar /> : null}
      <div>{children}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  isNav: PropTypes.bool,
}

export default TemplateWrapper
