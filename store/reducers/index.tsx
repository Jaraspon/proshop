const initialState = {
  product: {},
  products: [],
  auth: false

};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      console.log('l', action.payload);

      return {
        ...state,
        auth: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return { ...state };
  }
};
