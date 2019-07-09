import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * Layout Component built on top of bootstrap 4.
 */
function Layout(props) {
  const {navbar} = props

  return (
    <div className="Layout">
      {navbar}
      <div className="container-fluid">
        <div className="row">
          <div className="col px-0">
            <main>
              {props.children}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  navbar: PropTypes.node.isRequired
}

export default Layout
