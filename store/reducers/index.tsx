const initialState = {
  auth: false,
  pathLogin: false,
  categorys: [],
  products: []
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
    case "CATEGORY_PRODUCTS":
      return {
        ...state,
        categorys: action.payload,
      };
    case "ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return { ...state };
  }
};
