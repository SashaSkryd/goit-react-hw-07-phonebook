import { configureStore } from "@reduxjs/toolkit"
import { createContactsReducer, createFilterReducer } from "../redux/reducers/reducer.js"

const store = configureStore({
  reducer: {
    contacts: createContactsReducer,
    filter: createFilterReducer,
  },
})

store.subscribe(() => {
  localStorage.setItem("Contacts", JSON.stringify(store.getState().contacts))
})

export default store
