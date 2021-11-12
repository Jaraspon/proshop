import axios from '@axios'
import Cookies from 'js-cookie'
// import getConfig from 'next/config'
// const env = getConfig().publicRuntimeConfig;


export const loginStore = () => async (dispatch: any, subscribe: any) => {
    console.log('login');

    var data = true
    console.log(data);

    dispatch({ type: 'LOGIN', payload: data })
    return subscribe({ type: 'LOGIN', payload: data })
}

export const logoutStore = () => async (dispatch: any, subscribe: any) => {
    console.log('logout');

    var data = false
    console.log(data);
    Cookies.remove('pethouse_auth')
    dispatch({ type: 'LOGOUT', payload: data })
    return subscribe({ type: 'LOGOUT', payload: data })
}
