import { handleServerError } from '../common';
import axios from 'axios';

const handler = async (req: any, res: any) => {
    const {
        method,
        body: { password }
    } = req;

    if (method === 'POST') {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_ENGINE_URL + '/api/v1/utils/validate/password', {
                password
            });
            res.statusCode = 200;
            if (response.status === 200) {
                res.json({ status: true });
                return;
            }
            res.json({ status: false, error: response.data.detail, token: null });
        } catch (e) {
            const errorResponse = (e as any).response;
            if (errorResponse.status >= 400 && errorResponse.status < 500) {
                const msg = errorResponse.data.msg.toUpperCase();
                res.status(200).json({ error: msg[0].toUpperCase() + msg.slice(1), status: false });
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
