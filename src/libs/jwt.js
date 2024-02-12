import jwt from 'jsonwebtoken'
import {TOKEN_SECTRET} from '../config.js'

export function createAccessToken(payload){
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, 
            TOKEN_SECTRET,
            {
                expiresIn: '1d'
            },
            (err, token) => {
                if(err) reject(err);
                resolve(token)
            }
        )
    })
}