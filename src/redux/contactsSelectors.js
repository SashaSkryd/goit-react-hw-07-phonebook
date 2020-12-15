import { createSelector } from "@reduxjs/toolkit"

const getContact = (state) => state.contacts

const getFilter = (state) => state.filter

const getVisibleFilter = (state) => state.contacts.length > 1

// const getFilteredItems = state => {
//     const contacts = getContact(state)

//     const filter = getFilter(state)

//     return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

// }

const getFilteredItems = createSelector([getContact, getFilter], (contacts, filter) => {
  return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
})

export default {
  getContact,
  getFilteredItems,
  getVisibleFilter,
  getFilter,
}
