import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './NavBar.css'
import NavBarLogo from './NavBarLogo/NavBarLogo'
import HomeIcon from '../FontAwesome/HomeIcon'
import UserTieIcon from '../FontAwesome/UserTieIcon'
import GithubAltIcon from '../FontAwesome/GithubAltIcon'
import RocketIcon from '../FontAwesome/RocketIcon'

const navItemBaseClasses = ['nav-item', 'mr-4']
const navItemActiveClasses = navItemBaseClasses.concat(
  ['active', 'border-primary', 'border-bottom']
)

/**
 * NavBar Component
 */
function NavBar(props) {
  // Nome da rota para identificação da página ativa
  const pathname = props.location.pathname

  const homeClass = pathname === '/'
    ? navItemActiveClasses.join(' ')
    : navItemBaseClasses.join(' ')

  const aboutClass = pathname === '/about'
    ? navItemActiveClasses.join(' ')
    : navItemBaseClasses.join(' ')

  const appsClass = pathname === '/apps'
    ? navItemActiveClasses.join(' ')
    : navItemBaseClasses.join(' ')

  return (
    <div className="NavBar">
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <Link to="/" className="nav-brand">
          <NavBarLogo />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={homeClass}>
              <Link to="/" className="nav-link" style={{outline: 0}}>
                <HomeIcon />
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className={aboutClass}>
              <Link to="/about" className="nav-link" style={{outline: 0}}>
                <UserTieIcon />
              </Link>
            </li>
            <li className={appsClass}>
              <Link to="/apps" className="nav-link" style={{outline: 0}}>
                <RocketIcon />
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                href="https://github.com/hbobenicio"
                target="_blank" rel="noopener noreferrer"
                style={{outline: 0}}>
                <GithubAltIcon />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(NavBar)
