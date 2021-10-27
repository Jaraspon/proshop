const axios = require('axios');

// import getConfig from 'next/config'
// const env = getConfig().publicRuntimeConfig;


export const index = () => async (dispatch: (arg0: { type: string }) => void, subscribe: (arg0: { type: string; payload: any }) => any) => {
   
    dispatch({ type: 'REGISTER' })
    return subscribe({ type: 'REGISTER', payload: {} })
}
