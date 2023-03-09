import { configureStore } from "@reduxjs/toolkit";

// Define the initial state of the store
const initialState = {
  data: [],
};

// Define a reducer function to update the state
function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "setData":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

// Create the Redux store
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
