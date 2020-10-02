import React, { Fragment, useContext, useState } from 'react'

import { ChartEntry } from './ChartEntry'
import { ClientState } from '../../../context/clientContext/ClientState';


export const ClientForm = () => {
  // const { addClient } = useContext(ClientState)

  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   addClient(client)
  //   setClient({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //   })
  // }
  // console.log(client, 'hiii')

  return (
    <Fragment>
      <form onSubmit=''>
        <h1 className='title is-3'>Client Form</h1>
        <input type="text" placeholder="First Name" name="firstName" value={client.firstName} onChange='' />
        <input type="text" placeholder="Last Name" name="phone" value={client.lastName} onChange='' />
        <input type="text" placeholder="email" name="email" value={client.email} onChange='' />
        <input type="text" placeholder="Phone" name="phone" value={client.phone} onChange='' />
        <button
          className="button is-primary ml-3 mt-2"
          type="submit"
        >
          Add
              </button>
      </form>
      <ChartEntry />
    </Fragment>
  )
}
