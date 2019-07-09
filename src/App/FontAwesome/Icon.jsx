import React from 'react'
import PropTypes from 'prop-types'

class Icon extends React.PureComponent {
  static propTypes = {
    solid: PropTypes.bool,
    brand: PropTypes.bool,
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x']),
    border: PropTypes.bool
  }

  static defaultProps = {
    size: 'lg',
    border: false
  }

  render() {
    const classes = []

    // Solid vs Brand

    if (this.props.solid) {
      classes.push('fas')
    }

    if (this.props.brand) {
      classes.push('fab')
    }

    // Label
    classes.push(`fa-${this.props.label}`)

    // Size
    classes.push(`fa-${this.props.size}`)

    // Border
    if (this.props.border) {
      classes.push('fa-border')
    }

    return <i className={classes.join(' ')} />
  }
}

export default Icon
