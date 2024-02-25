const DEFAULT_STATE = {
  count: 0,
  message: "Counter message",
};

export const counterReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === "INCREMENT") {
    const duplicateState = {
      ...state,
    };

    duplicateState.count = state.count + 1;

    return duplicateState;
  } else if (action.type === "DECREMENT") {
    const duplicateState = {
      ...state,
    };

    duplicateState.count = state.count - 1;

    return duplicateState;
  } else if (action.type === "SET") {
    const duplicateState = {
      ...state,
    };

    duplicateState.count = action.payload;

    return duplicateState;
  } else {
    return state;
  }
};
