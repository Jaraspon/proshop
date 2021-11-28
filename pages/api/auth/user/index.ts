import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require('jsonwebtoken');
// import { JWT } from 'server.config'
import { middleware } from '@/src/utils/middleware'
const db = require('@/src/config/database');

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

        let auth = middleware(req) // is user login
    
        if (auth) {
            // console.log('pass');
            let resDB = await db.query(`
            SELECT 
                users.id,
                users.username,
                users.firstname,
                users.lastname,
                users.email,
                users.gender,
                users.phone,
                line.line_key,
                users.address,
                users.created_at
            FROM users LEFT JOIN line ON users.id = line.user_id WHERE users.id = ? limit 1`, [auth.id])
            let userDB = await resDB.map((val: any, idx: any) => val)[0]
           
            let __res = {
                status: {
                    success: true,
                    message: ''
                },
                user: {
                    id: userDB.id,
                    username: userDB.username,
                    firstname: userDB.firstname,
                    lastname: userDB.lastname,
                    fullname: `${userDB.firstname} ${userDB.lastname}`,
                    email: userDB.email,
                    gender: userDB.gernder,
                    phone: userDB.phone || '',
                    line: userDB.line_key || '',
                    created_at: Math.floor(Date.parse(userDB.created_at) / 1000)

                },
                timestamp: Math.floor(Date.now() / 1000)
            }
        
            res.status(200).json(__res)
        } else {
            console.log('fail');
            let __res = {
                status: {
                    success: false,
                    message: 'Please login to your account.'
                },
                timestamp: Math.floor(Date.now() / 1000)
            }
            res.status(400).json(__res)

        }
    } catch (err) {
        let __res = {
            status: {
                success: false,
                message: 'Get user error.'
            },
            timestamp: Math.floor(Date.now() / 1000)
        }
        res.status(400).json(__res)
    }
}
