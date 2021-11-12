import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require('jsonwebtoken');
// import { JWT } from 'server.config'
// import { middleware } from '@/src/middleware'
const db = require('@/database/db');

type Data = {
    status: {
        success: boolean,
        message: string,
    },
    data?: object,
    timestamp: number

}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            get(req, res)
            break
        default:
            res.status(405).end() //Method Not Allowed
            break
    }
}


const get = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        // console.log(req);
        
        // let auth = middleware(req) // is user login
        // console.log('auth', auth.id);

        // if (auth) {
            // console.log('pass');
            // let resDB = await db.query('SELECT id,username,firstname,lastname,email,gender,phone,line,address,created_at,updated_at FROM users WHERE id = ? limit 1', [auth.id])
            // let userDB = await resDB.map((val: any, idx: any) => val)[0]
            let __res = {
                status: {
                    success: true,
                    message: ''
                },
                user: {
                    id: 1,
                    // id: userDB.id,
                    username: "userDB.username",
                //     username: userDB.username,
                //     firstname: userDB.firstname,
                //     lastname: userDB.lastname,
                //     fullname: `${userDB.firstname} ${userDB.lastname}`,
                //     email: userDB.email,
                //     gender: userDB.gernder,
                //     phone: userDB.phone || '',
                //     line: userDB.line || '',
                //     created_at: userDB.created_at,
                //     updated_at: userDB.updated_at

                },
                timestamp: Math.floor(Date.now() / 1000)
            }
            res.status(200).json(__res)
        // } else {
        //     console.log('fail');
        //     let __res = {
        //         status: {
        //             success: false,
        //             message: 'Please login to your account.'
        //         },
        //         timestamp: Math.floor(Date.now() / 1000)
        //     }
        //     res.status(503).json(__res)

        // }
    } catch (err) {
        let __res = {
            status: {
                success: false,
                message: 'Get user error.'
            },
            timestamp: Math.floor(Date.now() / 1000)
        }
        res.status(503).json(__res)
    }
}
