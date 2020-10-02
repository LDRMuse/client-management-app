import React, { Fragment, useContext, useState } from 'react'

import { ChartEntry } from './ChartEntry'
import { ClientState } from '../../../context/clientContext/ClientState';

//TODO add a client and display on page
// edit guest table?
export const ClientForm = () => {
  // const { addClient } = useContext(ClientState)


  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  // this is just destructing client so we can use as the value on the form
  const { firstName, lastName, email, phone } = client

  // first we have to set the values in the input
  const handleChange = (e) => {
    e.preventDefault()
    setClient({
      ...client,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    })
  }

  //second, we need to do something with the values
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(client)
    // set the client back to empty strings
    setClient({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    })
  }


  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <h1 className='title is-3'>Client Form</h1>
        <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={handleChange} />
        <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={handleChange} />
        <input type="text" placeholder="email" name="email" value={email} onChange={handleChange} />
        <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange} />
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
