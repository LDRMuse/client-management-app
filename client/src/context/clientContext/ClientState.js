import React, {useReducer} from 'react'
import ClientContext from './clientContext'
import {clientReducer} from './clientReducer'
import {ADD_CLIENT} from '../types'


export const ClientState = (props) => {
  const initialState = {
    clients: [
      {
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe',
        phone: '111-222-3333',
        email: 'dsfsdfa@email.com'
      },
      {
        id: 2,
        firstName: 'Mane',
        lastName: 'Moe',
        phone: '111-222-3333',
        email: 'misdfsd@email.com'
      },
      {
        id: 3,
        firstName: 'Lane',
        lastName: 'Loe',
        phone: '111-222-3333',
        email: 'hdfsdsdfe@email.com'
      },
      {
        id: 4,
        firstName: 'Hane',
        lastName: 'Hoe',
        phone: '111-222-3333',
        email: 'sddsfsdf@email.com'
      }
    ]
  }

const [state, dispatch] = useReducer(clientReducer, initialState)

const addClient = (client) => {
  dispatch({
    type: ADD_CLIENT,
    payload: client
  })
}

  return (
    <ClientContext.Provider
    value={{
      clients: state.clients,
      addClient
      }}
    >{props.children}</ClientContext.Provider>
  )
}
