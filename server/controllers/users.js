import crypto from 'crypto'
import { Response } from '../utils/response.js'
import { findUserByEmail, storeNewAccount } from '../services/user.js'
import { generateSalt, hashText } from '../utils/auth.js'
import { generateTokens } from '../utils/jwt.js'
import { addRefreshTokenToWhitelist } from '../services/auth.js'

export const getUser = async (req, res, next) => {
    const err = new Response('getUser not implemented', 'res_notImplemented')
    next(err)
}

// export const getUser = async (req, res, next) => {
//     const users = await prisma.user.findMany();
//     if(users){
//         res.status(res_ok).json(users)
//     }
// }

export const userLogin = async (req, res, next) => {
    const err = new Response('userLogin not implemented', 'res_notImplemented')
    next(err)
}

export const userLogout = async (req, res, next) => {
    const err = new Response('userLogout not implemented', 'res_notImplemented')
    next(err)
}

export const userRegister = async (req, res, next) => {
    try {
        const { email, password, username, phoneNumber, name, role } = req.body
        if (!email || !password) {
            res.status(400)
            throw new Error('You must provide an email and a password.')
        }

        // check if this email can be used
        const existingUser = await findUserByEmail(email)

        if (existingUser) {
            res.status(400)
            throw new Error('Email already in use.')
        }

        // Hash password and store to DB
        const hashedPassword = hashText(password, generateSalt(12))
        const account = await storeNewAccount({ email, hashedPassword, username, phoneNumber, name, role });

        // Generate uuid
        const jti = crypto.randomUUID();

        // Generate Token
        const { accessToken, refreshToken } = generateTokens(account, jti);
        console.log(account)
        console.log(refreshToken)

        const userId = account.user.userId
        console.log(userId);

        // Whitelist refresh token (store in db)
        await addRefreshTokenToWhitelist({ jti, refreshToken, userId });

        res.json({
            accessToken,
            refreshToken,
        });

        // res.json('success')

    } catch (err) {
        err = new Response(err)
        next(err)

    }

}

export const updateUser = async (req, res, next) => {
    const err = new Response('updateUser not implemented', 'res_notImplemented')
    next(err)
}

export const userVerify = async (req, res, next) => {
    const err = new Response('userVerify not implemented', 'res_notImplemented')
    next(err)
}