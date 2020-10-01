import React, { Fragment, useState } from 'react'
import { Clients } from '../guests'

export const Dashboard = () => {
  const [clicked, setClicked] = useState(false)

const handleClick = () => {
  setClicked(true)
}


  return (

<Fragment>
<div className='container box'>
<h1 className='title is-3'>Hi, User!</h1>
<button className='button' onClick={handleClick}>View Clients</button>
{clicked ? <Clients /> : null }
</div>
</Fragment>

  )

}

