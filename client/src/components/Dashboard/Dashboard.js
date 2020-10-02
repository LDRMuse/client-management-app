import React, { Fragment, useState } from 'react'
import { Clients, ClientForm } from '../guests'

export const Dashboard = () => {
  const [clicked, setClicked] = useState(false)
  const [add, setAdd] = useState(false)


  const handleClick = (e) => {
    switch (e.currentTarget.value) {
      case 'View/SearchClients':
        setClicked(true)
        setAdd(false)
        break
      case 'Add New Client':
        setAdd(true)
        setClicked(false)
        break
      case 'Go Back':
        setClicked(false)
        setAdd(false)
        break
      default:
        setAdd(false)
        setClicked(false)
    }
  }

  const buttonChoices = ['View/SearchClients', 'Add New Client', 'Go Back'].map(buttonId => (
    <button
      className='button mb-5'
      key={buttonId}
      value={buttonId}
      onClick={handleClick}
    >
      {buttonId}
    </button>
  ))
return (
  <Fragment>
    <div className='container box'>
      <h1 className='title is-3'>Hi, User!</h1>
      <div className='container has-text-centered'>
      {buttonChoices}
        {clicked ? <Clients /> : null}
        {add ? <ClientForm /> : null}
      </div>
    </div>
  </Fragment>
)

}

