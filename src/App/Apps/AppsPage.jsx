import React from 'react'
import Page from '../Page/Page'
import AppCard from './AppCard/AppCard'
import './AppsPage.css'
import mementoImageUrl from './ss-memento.png'
import adivinheImageUrl from './ss-adivinhe.png'

function Apps() {
  return (
    <Page name="AppsPage">
      <h1 className="AppsPage-title mb-4">Apps</h1>

      <div className="row">
        <div className="col-sm-12 col-md-6 mb-4">
          <AppCard title="Adivinhe"
            imgUrl={adivinheImageUrl}
            appUrl="http://www.hugobenicio.com.br/adivinhe/"
            description="Sistema de Adivinhação de Número Aleatório"
            footer={<i className="fab fa-js fa-2x" />}>

            Utilizado como meu pedido de noivado! (experimente chegar até o final do jogo ;P)
          </AppCard>
        </div>

        <div className="col-sm-12 col-md-6">
          <AppCard title="Memento"
            imgUrl={mementoImageUrl}
            appUrl="https://hbobenicio.github.io/memento/"
            description="Sistema de Lembrança de Despesas."
            footer={<i className="fab fa-vuejs fa-2x" />}>

            Utilizado como meu pedido de noivado!
          </AppCard>
        </div>
      </div>
    </Page>
  )
}

export default Apps
