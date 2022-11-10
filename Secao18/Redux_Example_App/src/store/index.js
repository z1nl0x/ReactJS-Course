// To install Redux Toolkit execute the command on the terminal: "npm install @reduxjs/toolkit"
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

export const INCREMENT = "increment";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.decrement--;
    },
    increase(state, action) {
      state.counter = state.counter + action.incrementNumber;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  /* A way of declaring many more reducers if we have it more than one*/
  // reducer: { counter: counterSlice.reducer },
  reducer: counterSlice.reducers,
});

// This is the way of using redux without the reduxjs toolkit!

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.incrementNumber,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

export default store;
