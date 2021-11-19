import type { NextApiRequest, NextApiResponse } from 'next'
// import { JWT } from 'server.config'
const { Validator } = require('node-input-validator');
const db = require('@/database/db');
import dateFormat, { masks } from "dateformat";

const bcrypt = require('bcrypt');
const saltRounds = 10;


let timestamp = dateFormat(new Date(), "yyyy-mm-dd, h:MM:ss");

type Data = {
    status: {
        success: boolean,
        message: string,
    },
    data?: object,
    timestamp: number

}
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'POST':
            store(req, res)
            break
        default:
            res.status(405).end() //Method Not Allowed
            break
    }
}


const store = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {


        const v = await new Validator(req.body, {
            username: 'required',
            password: 'required|minLength:6',
            email: 'required|email',
            firstname: 'required',
            lastname: 'required',
            gender: 'required',
        });

        const matched = await v.check();
        if (!matched) {
            res.status(422).send(v.errors);
            return;
        }

        let isUsername = await db.query(`SELECT username FROM users WHERE username = ?`, [v.inputs.username])
        let isEmail = await db.query(`SELECT email FROM users WHERE email = ?`, [v.inputs.email])


        if (isUsername.length > 0 || isEmail.length > 0) {

            let __res = {
                status: {
                    success: false,
                    message: (isUsername.length > 0 && isEmail.length > 0 ? 'Username and Email is already in use.' : (isUsername.length > 0 ? 'Username is already in use.' : (isEmail.length > 0 ? 'Email is already in use.' : '')))
                },
                timestamp: Math.floor(Date.now() / 1000)
            }
            res.status(200).json(__res)
            return;
        }



        const hashPassword = bcrypt.hashSync(v.inputs.password, saltRounds);


        let resDB = await db.query(
            'INSERT INTO users (username,email,firstname,lastname,gender,created_at,updated_at) VALUES (?,?,?,?,?,?,?)',
            [
                v.inputs.username || '',
                v.inputs.email || '',
                v.inputs.firstname || '',
                v.inputs.lastname || '',
                v.inputs.gender || 'female',
                timestamp,
                timestamp
            ]
        );

        
        if (resDB.insertId != 0) {
            let resDBPassword = await db.query(
                'INSERT INTO password (user_id,password,created_at,updated_at) VALUES (?,?,?,?)',
                [
                    resDB.insertId,
                    hashPassword || '',
                    timestamp,
                    timestamp
                ]
            );
            let __res = {
                status: {
                    success: true,
                    message: 'Register success'
                },
                data: { resDB },
                timestamp: Math.floor(Date.now() / 1000)
            }
            res.status(200).json(__res)

        }




    } catch (err) {
        let __res = {
            status: {
                success: false,
                message: 'Register error'
            },
            timestamp: Math.floor(Date.now() / 1000)
        }
        res.status(400).json(__res)
    }


}
