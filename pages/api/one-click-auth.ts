// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleServerError } from './common';
import axios from 'axios';

const handler = async (req: any, res: any) => {
    const {
        method,
        body: { email }
    } = req;

    if (method === 'POST') {
        const payload = {
            email,
            engine: 'fst'
        };

        try {
            const response = await axios.post(
                process.env.NEXT_PUBLIC_ENGINE_URL + '/api/v1/oauth/one-click-intent',
                payload
            );
            res.statusCode = 200;
            if (response.status === 200) {
                const payload = {
                    status: true
                };
                res.json(payload);
                return;
            }

            res.json({ status: false, error: response.data.detail });
        } catch (e: any) {
            if (e.response && e.response.data && e.response.data.msg) {
                res.json({ status: false, error: e.response.data.msg });
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
