const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return state + payload;
    case "DECREMENT":
      return state - payload;
    default:
      return state;
  }
};
export default changeTheNumber;
