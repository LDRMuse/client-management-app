import React, { Fragment, useState } from 'react'
import { Clients, ClientForm } from '../guests'

export const Dashboard = () => {
  const [clicked, setClicked] = useState(false)
  const [add, setAdd] = useState(false)


  const handleClick = (e) => {
    if (e.currentTarget.value === 'View') {
      setClicked(true)
      setAdd(false)
    } else if (e.currentTarget.value === 'Add') {
      setAdd(true)
      setClicked(false)
    }
  }


  return (
    <Fragment>
      <div className='container box'>
        <h1 className='title is-3'>Hi, User!</h1>
        <div className='container has-text-centered'>
          <button className='button' value='View' onClick={handleClick}>View/Search Clients</button>
          {clicked ? <Clients /> : null}
          <button className='button' value='Add' onClick={handleClick}>Add New Client</button>
          {add ? <ClientForm /> : null}
        </div>
      </div>
    </Fragment>
  )

}

