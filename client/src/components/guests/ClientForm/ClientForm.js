import React, { Fragment, useContext, useState } from 'react'

import { ChartEntry } from './ChartEntry'
import ClientContext from '../../../context/clientContext/clientContext';

//TODO add a client and display on page

export const ClientForm = () => {
  const { addClient } = useContext(ClientContext)

// 1.this component's state is the user input, we need to set the state
// the state starts out as empty stings and waits for the user's input
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  // 2. this is just destructing state so we don't have to type client.firstName, etc
  const { firstName, lastName, email, phone } = client

  // 3. now we have to set state by using the values from the input
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

  // 4. we need to do something with the values
  const handleSubmit = (e) => {
    e.preventDefault()
    // 5. the values of client gets send to ClientState by the addClient function
    addClient(client)
    // then set the client back to empty strings after setting the state
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
