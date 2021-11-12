import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require('jsonwebtoken');
// import { JWT } from 'server.config'
// import { middleware } from '@/src/middleware'

type Data = {
    status: {
        success: boolean,
        message: string,
    },
    data?: {
        id: number,
        firstName: string,
        lastName: string,
        username: string,
        token: string,
    },
    timestamp: number

}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            get(req, res)
            break
        case 'PUT':
            update(req, res)
            break
        case 'DELETE':
            destroy(req, res)
            break
        default:
            res.status(405).end() //Method Not Allowed
            break
    }
}



const get = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const id = req.query.id || ''
    try {
        // let auth = middleware(req) // is user login
        // if (auth) {
        //     console.log('pass');
            
        // } else {
        //     console.log('fail');
            
        // }
        let __res = {
            status: {
                success: true,
                message: ''
            },
            data: {
                id: 1,
                firstName: 'Jesdakorn',
                lastName: 'Saelor',
                username: 'jesdakorn',
                token: 'auth',
            },
            timestamp: Math.floor(Date.now() / 1000)
        }
        res.status(200).json(__res)
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

const update = (req: NextApiRequest, res: NextApiResponse<Data>) => {

}
const destroy = (req: NextApiRequest, res: NextApiResponse<Data>) => {

}