import React from 'react'
import Page from '../Page/Page'

import './HomePage.css'
import perfilUrl from './perfil-160x120.jpg'

function HomePage() {
  return (
    <Page name="HomePage">
      <div>
        <img src={perfilUrl} alt="Profile" className="img-thumbnail" />
        <h1 className="display-4">Hugo Benício</h1>
        <p className="lead">
          Programming is an art!
        </p>
      </div>
    </Page>
  )
}

export default HomePage
