import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require('jsonwebtoken');
import { JWT } from 'server.config'
const { Validator } = require('node-input-validator');
const db = require('@/database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;


type Data = {
    status: {
        success: boolean,
        message: string,
    },
    data?: {
        id: number,
        username: string,
        token: string,
    },
    timestamp: number

}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    try {

        const v = await new Validator(req.body, {
            username: 'required',
            password: 'required|minLength:6',
        });
        const matched = await v.check();
        if (!matched) {
            res.status(422).send(v.errors);
            return;
        }


        let resDB = await db.query('SELECT * FROM users WHERE username = ? or email = ? limit 1', [v.inputs.username, v.inputs.username])


        if (resDB.length == 0) {
            let __res = {
                status: {
                    success: false,
                    message: 'This username not be found in the system.'
                },
                timestamp: Math.floor(Date.now() / 1000)
            }
            res.status(200).json(__res)
            return;
        }

        let userDB = await resDB.map((val: any, idx: any) => val)[0]
        
        let resDBPassword = await db.query('SELECT * FROM password WHERE user_id limit 1', [userDB.id])
      
        let passwordDB = await resDBPassword.map((val: any, idx: any) => val)[0]


        
        let isPassword = bcrypt.compareSync(v.inputs.password, passwordDB.password);
        if (!isPassword) {
            let __res = {
                status: {
                    success: true,
                    message: 'The password is incorrect.'
                },
                timestamp: Math.floor(Date.now() / 1000)
            }
            res.status(200).json(__res)
            return;
        }

        let dataJwt = {
            id: userDB.id,
            username: userDB.username,
            firstname: userDB.firstname,
            lastname: userDB.lastname,
            fullname: `${userDB.firstname} ${userDB.lastname}`,
            email: userDB.email
        }

        var token = jwt.sign(dataJwt, JWT.key, { expiresIn: JWT.exp });
        let __res = {
            status: {
                success: true,
                message: ''
            },
            data: {
                id: userDB.id,
                username: userDB.username,
                token: token,
            },
            timestamp: Math.floor(Date.now() / 1000)
        }
        res.status(200).json(__res)
    } catch (err) {
        let __res = {
            status: {
                success: false,
                message: 'login error.'
            },
            timestamp: Math.floor(Date.now() / 1000)
        }
        res.status(400).json(__res)
    }
}
