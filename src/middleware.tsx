import React from 'react'
var local = require('local-storage');
// const axios = require('axios');
import axios from '@axios'
import * as cookie from 'cookie';
import Cookies from 'js-cookie'

export async function getMiddleware(key: any) {
    // console.log("sssssssss",local.get("pethouse_auth"));

    let cookieKey = cookie.parse(key)
    let token = null
    let isAuth = false
    let user = {}

    await axios.get("/api/auth/user", {
        headers: {
            'Authorization': `bearer ${cookieKey['pethouse_auth']}`
        }
    }).then((res: any) => {
        if (res.data.status.success) {
            token = cookieKey['pethouse_auth']
            isAuth = true
            user = res.data.user
        } else {
            token = null
            isAuth = false
            user = {}
        }
    }).catch((err: any) => {
        console.log('error')
        token = null
        isAuth = false
        user = {}
        // Cookies.remove('pethouse_auth')
    })

    // await axios.get("/api/auth/user", {
    //     headers: {
    //         'Authorization': `bearer ${cookieKey["pethouse_auth"]}`
    //     }
    // }).then((res: any) => {
    //     // console.log(res);
    //     token = cookieKey["pethouse_auth"]
    //     // if (res.data.status.success) {
    //     //     token = res
    //         isAuth = true
    //     //     user = res.data.user
    //     // } else {
    //     //     token = res
    //     //     isAuth = false
    //     //     user = {}

    //     // }

    // }).catch((err: any) => {
    //     console.log(err);

    //     // console.log('error')
    //     token = cookieKey["pethouse_auth"]
    //     isAuth = false
    //     user = {}
    //     // Cookies.remove('k_user')
    // })
    // let item = { token, isAuth, user };
    return { token, isAuth, user }
}
// import Cookies from 'js-cookie'
// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router';
// import { connect, useDispatch, useSelector, useStore } from 'react-redux'
// import axios from 'axios';
// import { getUser } from '@/store/actions';
// import getConfig from 'next/config'

// const env = getConfig().publicRuntimeConfig;
// import Loading from '@/components/Loading';
// import * as cookie from 'cookie'

// export function middleware(path = '/') {
//     const router = useRouter()
//     const counter = useSelector((state) => state['reducer'])
//     const dispatch = useDispatch()
//     console.log('->', Cookies.get('k_user'));
//     const [pathMain, setPathMain] = useState(['/auth/login','/auth/register'])
//     const [pathManage, setPathManage] = useState(['/manage/story','/manage/story/my'])
//     useEffect(() => {
//         if (pathMain.includes(path)) {
//             router.push('/');
//         }
//         if(pathManage.includes(path)){
//             router.push('/auth/login');
//         }
//         // (async () => {
//         //     let resGetUser = await dispatch(getUser());
//         //     if (resGetUser['reducer'].auth.isAuth) {
//         //         await router.push(path);
//         //     }

//         // })();
//     }, [])
// }

// export async function getMiddleware(cookieApi) {
//     let cookieKey = cookie.parse(cookieApi)
//     let token = null
//     let isAuth = null
//     let user = null

//     await axios.get(`${env.API_HOST}auth/profile`, {
//         headers: {
//             'Authorization': `bearer ${cookieKey['k_user']}`
//         }
//     }).then((res) => {
//         if (res.data.status.success) {
//             token = cookieKey['k_user']
//             isAuth = true
//             user = res.data.user
//         } else {
//             token = null
//             isAuth = false
//             user = null

//         }

//     }).catch((error) => {
//         console.log('error')
//         token = null
//         isAuth = false
//         user = null
//         Cookies.remove('k_user')
//     })
//     // let item = { token, isAuth, user };
//     return { token, isAuth, user }
// }