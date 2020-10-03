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
        // take the clients array with with the matching id and add the payload to the chart
        clients: [...state.clients.id, payload]
      }
    default:
      return state
  }
}
