import { SHOW_CLIENT } from '../types'

export const clientReducer = (state, { type, payload }) => {
  switch (type) {
    case SHOW_CLIENT:
      return {
        ...state
      }
    default:
      return state
  }
}
