import React, {useContext} from 'react'
import ClientContext from '../../context/clientContext/clientContext'
import {Client} from './Client'

export const Clients = () => {
const { clients } = useContext(ClientContext)

console.log(clients)

  return (
    <div>
 <div className="guests">
    {clients.map(client => <Client key={client.id} name={client.name} email={client.email} phone={client.phone}/>)}
  </div>
    </div>
  )
}

// grabbed clients from useContext
// to grab a single client from clients, we need to map
// need to have an id if we're using map
