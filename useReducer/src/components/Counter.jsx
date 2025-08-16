import React, { useState, useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  // return a newState
  // possible actions :- increment, decrement, reset
  // newState depends on whatever actions we have...

  console.log(action.type);
  console.log(action.payload);

  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.payload };

    case "decrement":
      return { firstCounter: state.firstCounter - action.payload };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const Counter = () => {
  // console.log(useReducer());

  const [count, dispatch] = useReducer(reducer, initialState);
  // useReducer will return an array of 2 items -> 1. newState(count), 2. some func.(dispatch)
  // count is whatever we are passing as an initialState....
  // dispatch will invoke actions...
  // dispatch will tell what actions should i invoke...
  // dispatch("increment") -> newState = 1
  // dispatch("decrement") -> newState = -1
  // dispatch("reset") -> newState = 0

  console.log(count);

  // Note:-
  // useReducer is better than useState
  return (
    <div>
      <h1>Count : {count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment By 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement By 1
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement By 5
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment By 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement By 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
