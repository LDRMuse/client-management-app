import React, {useReducer} from 'react'
import ClientContext from './clientContext'
import {clientReducer} from './clientReducer'
import {SHOW_CLIENT} from '../types'


export const ClientState = (props) => {
  const initialState = {
    clients: [
      {
        id: 1,
        name: 'Melissa Heying',
        phone: '111-222-3333',
        email: 'melissa@email.com'
      },
      {
        id: 2,
        name: 'Mike Heying',
        phone: '444-222-5555',
        email: 'mikey@email.com'
      },
      {
        id: 3,
        name: 'Heike Cooke',
        phone: '777-999-3333',
        email: 'heike@email.com'
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
