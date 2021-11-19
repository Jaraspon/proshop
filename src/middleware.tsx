import React from 'react'
var local = require('local-storage');
const jwt = require('jsonwebtoken');
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
        Cookies.remove('pethouse_auth')
    })
    return { token, isAuth, user }
}

export function middleware(req: any) {
    var header = req.headers.authorization || '';
    var token = header.split(/\s+/).pop() || '';
    let decoded
    try {
        decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_KEY);
    } catch (err) {
        decoded = false
    }
    return decoded
}