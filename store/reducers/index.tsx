const initialState = {
  auth: false,
  pathLogin: false,
  categorys: [],

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
    default:
      return { ...state };
  }
};
