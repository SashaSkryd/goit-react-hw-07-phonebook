import axios from "axios"
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
  removeContactSuccess,
  removeContactError,
  removeContactRequest,
} from "./actions/actions.js"

const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest())

  axios
    .post("http://localhost:2000/contacts", { ...contact })
    .then((response) => {
      dispatch(addContactSuccess(response.data))
    })
    .catch((error) => dispatch(addContactError(error)))
}

const fetchContact = () => (dispatch) => {
  dispatch(fetchContactRequest())

  axios
    .get("http://localhost:2000/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)))
}

const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest())

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id))
    })
    .catch((error) => dispatch(removeContactError(error)))
}

export default {
  addContact,
  fetchContact,
  removeContact,
}
