import React from 'react'
import PropTypes from 'prop-types'

function AppCard(props) {
  const {title, imgUrl, appUrl, description, footer} = props

  const cardFooter = props.footer ?
    <div className="card-footer">
      {footer}
    </div>
    : null

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-center">{title}</h3>
      </div>
      <a href={appUrl} target="_blank" rel="noopener noreferrer" style={{outline: 0}}>
        <img className="card-img-top" src={imgUrl} alt={`${title} App`} />
      </a>
      <div className="card-body">
        <p className="card-text">{description}</p>
        {props.children}
      </div>
      {cardFooter}
    </div>
  )
}

AppCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  appUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footer: PropTypes.node
}

export default AppCard
