import { Clients } from '../../components/guests'
import { ADD_CLIENT } from '../types'

export const clientReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, payload]
      }
    default:
      return state
  }
}
