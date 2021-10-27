const jwt = require('jsonwebtoken');
import { NextApiRequest } from 'next';
import { JWT } from 'server.config'

export function middleware(req: NextApiRequest) {
    var header = req.headers.authorization || '';
    var token = header.split(/\s+/).pop() || '';
    let decoded
    try {
        decoded = jwt.verify(token, JWT.key);
    } catch (err) {
        decoded = false
    }
    return decoded
}

