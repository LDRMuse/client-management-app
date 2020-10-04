import React, { Fragment, useContext, useState } from 'react'

import { ChartEntry } from './ChartEntry'
import ClientContext from '../../../context/clientContext/clientContext';

import '../client-list.css'

  //TODO figure out how to add chart notes to client
  // create conditional button once client is added "add chart notes" that takes you to chart entry component?
  // Is this how you can connect the notes to the client?


export const ClientForm = () => {
  const { addClient } = useContext(ClientContext)

  // 1.this component's state is the user input, we need to set the state
  // the state starts out as empty stings and waits for the user's input
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
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

    const newClientWithCharts = {
      ...client,
      charts: []
    }
    addClient(newClientWithCharts)

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
    <div className='box' id='formBox'>
      <h1 className='title is-3'>Client Form</h1>
      <form className='field is-grouped is-grouped-centered' onSubmit={handleSubmit}>
        <div className='inputWidth'>
          <input
            type="text"
            className='input'
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            className='input'
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            className='input'
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="text"
            className='input'
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          <button className="button ml-3 mt-2" type="submit">Add</button>
          <button className='button mt-3 mb-3'>Add Chart Entry</button>
        </div>
      </form>
      </div>
      <ChartEntry client={client}/>
    </Fragment>
  )
}
