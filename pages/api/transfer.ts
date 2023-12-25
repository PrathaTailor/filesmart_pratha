// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleServerError } from './common';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import cookieParser from 'cookie-parser';

// Disable body parsing for this route
export const config = {
    api: {
        bodyParser: false
    }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    res.statusCode = 200;

    if (method === 'POST') {
        cookieParser()(req as any, res as any, () => {});

        const refreshToken = req.cookies['refresh-token'];
        const payload = {
            refresh_token: refreshToken
        };

        try {
            const response = await axios.post(
                process.env.NEXT_PUBLIC_ENGINE_URL + '/api/v1/oauth/transfer-token',
                payload
            );

            if (response.status === 200) {
                const payload = {
                    status: true,
                    token: response.data.transfer_token
                };
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
