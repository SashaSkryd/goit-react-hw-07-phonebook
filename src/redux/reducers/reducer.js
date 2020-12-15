import { createReducer } from "@reduxjs/toolkit"
import {
  filterContact,
  addContactSuccess,
  fetchContactSuccess,
  removeContactSuccess,
} from "../actions/actions.js"

const createAddContact = (state, actions) => {
  return [...state, { ...actions.payload }]
}

const createRemoveContact = (state, actions) => {
  return state.filter((contact) => {
    return contact.id !== actions.payload
  })
}

const createContactsReducer = createReducer([], {
  [fetchContactSuccess]: (state, actions) => actions.payload,
  [addContactSuccess]: createAddContact,
  [removeContactSuccess]: createRemoveContact,
})

const createFilterReducer = createReducer("", {
  [filterContact]: (state, actions) => actions.payload,
})

export { createContactsReducer, createFilterReducer }
