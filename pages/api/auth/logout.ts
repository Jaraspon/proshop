// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import jwtConfig from 'jwt.config'
// const jwt = require('jsonwebtoken');

// type Data = {
//     status: {
//         success: boolean,
//         message: string,
//     },
//     data?: {
//         id: number,
//         firstName: string,
//         lastName: string,
//         username: string,
//         token: string,
//         timestamp: number,
//         staat: string
//     }

// }

// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//     var header = req.headers.authorization || '';
//     var token = header.split(/\s+/).pop() || '';
//     jwt.sign(token, "", { expiresIn: 50 }, (logout: any, err: any) => {
//         if (logout) {
//             let __res = {
//                 status: {
//                     success: true,
//                     message: ''
//                 },
//                 timestamp: Math.floor(Date.now() / 1000)
//             }
//             console.log(jwt.verify(token, jwtConfig.key));
//             res.status(200).json(__res)
//         } else {
//             let __res = {
//                 status: {
//                     success: false,
//                     message: 'please login to your account before sign out.'
//                 },
//                 timestamp: Math.floor(Date.now() / 1000)
//             }
//             res.status(200).json(__res)
//         }
//     });
   
    
//     // let data = {
//     //     id: 1,
//     //     firstName: 'Jesdakorn',
//     //     lastName: 'Saelor',
//     //     username: 'jesdakorn',
//     //     token: token,
//     //     timestamp: Math.floor(Date.now() / 1000)
//     // }
//     // res.status(200).json(data)
// }
