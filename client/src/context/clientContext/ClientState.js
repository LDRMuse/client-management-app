import React, {useReducer} from 'react'
import ClientContext from './clientContext'
import {clientReducer} from './clientReducer'
import {SHOW_CLIENT} from '../types'


export const ClientState = (props) => {
  const initialState = {
    clients: [
      {
        id: 1,
        name: 'Jane Doe',
        phone: '111-222-3333',
        email: 'dsfsdfa@email.com'
      },
      {
        id: 2,
        name: 'John Smith',
        phone: '444-222-5555',
        email: 'misdfsd@email.com'
      },
      {
        id: 3,
        name: 'Britney Spears',
        phone: '777-999-3333',
        email: 'hdfsdsdfe@email.com'
      },
      {
        id: 4,
        name: 'Spider Man',
        phone: '777-099-3033',
        email: 'sddsfsdf@email.com'
      }
    ]
  }

const [state, dispatch] = useReducer(clientReducer, initialState)

const showClient = () => {
  dispatch({
    type: SHOW_CLIENT
  })
}

  return (
    <ClientContext.Provider
    value={{
      clients: state.clients
      }}
    >{props.children}</ClientContext.Provider>
  )
}
