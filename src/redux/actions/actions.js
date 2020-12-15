import { createAction } from "@reduxjs/toolkit"

const addContactRequest = createAction("contact/addRequest")
const addContactSuccess = createAction("contact/addSuccess")
const addContactError = createAction("contact/addError")

const fetchContactRequest = createAction("contact/fetchRequest")
const fetchContactSuccess = createAction("contact/fetchSuccess")
const fetchContactError = createAction("contact/fetchError")

const removeContactRequest = createAction("contact/removeRequest")
const removeContactSuccess = createAction("contact/removeSuccess")
const removeContactError = createAction("contact/removeError")

const addContact = createAction("ADD_CONTACT")
const removeContact = createAction("REMOVE_CONTACT")
const filterContact = createAction("CHANGE_FITER")

export {
  addContactError,
  addContactSuccess,
  addContactRequest,
  fetchContactError,
  fetchContactSuccess,
  fetchContactRequest,
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  addContact,
  removeContact,
  filterContact,
}
