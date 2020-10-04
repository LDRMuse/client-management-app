import { ADD_CLIENT, ADD_CHART_ENTRY } from '../types'

export const clientReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, payload]
      }
    case ADD_CHART_ENTRY:
      return {
        ...state,
        // update the clients array where the client.id and payload.id matches OR keep client as is
        clients: state.clients.map(client => client.id === payload.id ? payload : client)
      }
    default:
      return state
  }
}
