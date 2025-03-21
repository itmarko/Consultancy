// src/store/store.js
// for state management (Redux, MobX, etc.).
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer"; // Reducer for post-related state
import userReducer from "./reducers/userReducer"; // Reducer for user-related state

// Create the Redux store using Redux Toolkit's configureStore
const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer, // You can add more reducers as needed
  },
  // The Redux Toolkit automatically includes redux-thunk as the default middleware
});

export default store;
