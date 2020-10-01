import React, { Fragment, useState } from 'react'
import { Clients, ClientForm } from '../guests'

export const Dashboard = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    switch (clicked) {
      case 'View/SearchClients':
        setClicked(true)
        break
      case 'Add New Client':
        setClicked(true)
        break
      default: setClicked(false)
    }

  }
  const buttonChoices = ['View/SearchClients', 'Add New Client'].map(buttonId => (
    <button
      className='button mb-5'
      key={buttonId}
      value={buttonId}
      onClick={handleClick}
    >
      {buttonId}
    </button>
  ))

//TODO figure out how to conditionally display components when the button type is clicked
  return (
    <Fragment>
      <div className='container box'>
        <h1 className='title is-3'>Hi, User!</h1>
        <div className='container has-text-centered'>
          {buttonChoices}
          {clicked && 'View/SearchClients' ? <Clients /> : null}
          {clicked && 'Add New Client' ? <ClientForm /> : null}
        </div>
      </div>
    </Fragment>
  )

}

