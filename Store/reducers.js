const initialState = {
  adder: false,
  favourite: [],
  isLogged: true,
  auth:null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FAVOURITE':
      return {
        ...state,
        favourite: action.payload,
      };
    case 'IS_ADDER':
      return {
        ...state,
        adder: action.payload,
      };
    case 'LOGIN':
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};
