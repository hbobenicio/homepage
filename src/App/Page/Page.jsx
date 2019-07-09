import React from 'react'
import PropTypes from 'prop-types'

function Page(props) {
  return (
    <section className={`Page ${props.name} m-4`}>
      {props.children}
    </section>
  )
}

Page.propTypes = {
  name: PropTypes.string.isRequired
}

export default Page
