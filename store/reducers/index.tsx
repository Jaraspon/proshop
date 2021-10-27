const initialState = {
  product: {},
  products: [],

};

export const reducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return { ...state };
  }
};
