// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleServerError } from './common';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        method,
        body: { token }
    } = req;
    res.statusCode = 200;

    if (method === 'POST') {
        const payload = {
            token: token
        };

        try {
            const response = await axios.post(
                process.env.NEXT_PUBLIC_ENGINE_URL + '/api/v1/oauth/exchange/token',
                payload
            );

            if (response.status === 200) {
                const userUid = response.data.profile.id;
                const payload = {
                    status: true,
                    userUid,
                    token: response.data.jwt_token
                };

                const cookies = response.headers['set-cookie'];
                let refreshToken = '';
                cookies?.forEach((cookie) => {
                    if (cookie.includes('refresh-token')) {
                        refreshToken = cookie.split(';')[0].split('=')[1];
                    }
                });

                // set the cookie with the specified name and value, and an expiration time of 20 minutes
                const expirationTime = new Date(Date.now() + 1000 * 60 * 20); // 20 minutes from now
                if (refreshToken && refreshToken !== '') {
                    setCookie({ res }, 'refresh-token', refreshToken, {
                        maxAge: 20 * 60,
                        expires: expirationTime,
                        path: '/',
                        httpOnly: true
                    });
                }

                res.json(payload);
                return;
            }

            res.json({ status: false, error: response.data.detail, token: null });
        } catch (e: any) {
            if (e.response && e.response.data && e.response.data.msg) {
                res.json({ status: false, error: e.response.data.msg, token: null });
                return;
            }

            handleServerError(res, e);
        }
        return;
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
};

export default handler;
