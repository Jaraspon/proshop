const initialState = {
  product: {},
  products: [],
  pathLogin: false

};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "PATH_LOGIN":
      return {
        ...state,
        pathLogin: action.payload,
      };
    case "LOGIN":
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
