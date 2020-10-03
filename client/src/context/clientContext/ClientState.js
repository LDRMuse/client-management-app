import React, {useReducer} from 'react'
import ClientContext from './clientContext'
import {clientReducer} from './clientReducer'
import {ADD_CLIENT, ADD_CHART_ENTRY} from '../types'


export const ClientState = (props) => {
  const initialState = {
    clients: [
      {
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe',
        phone: '111-222-3333',
        email: 'dsfsdfa@email.com',
        charts: []
      },
      {
        id: 2,
        firstName: 'Mane',
        lastName: 'Moe',
        phone: '111-222-3333',
        email: 'misdfsd@email.com',
        charts: []
      },
      {
        id: 3,
        firstName: 'Lane',
        lastName: 'Loe',
        phone: '111-222-3333',
        email: 'hdfsdsdfe@email.com',
        charts: []
      },
      {
        id: 4,
        firstName: 'Hane',
        lastName: 'Hoe',
        phone: '111-222-3333',
        email: 'sddsfsdf@email.com',
        charts: []
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
const addChart = (client) => {
  dispatch({
    type: ADD_CHART_ENTRY,
    payload: client.charts
  })
}

  return (
    <ClientContext.Provider
    value={{
      clients: state.clients,
      addClient,
      addChart
      }}
    >{props.children}</ClientContext.Provider>
  )
}
