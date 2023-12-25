import { handleServerError } from '../common';
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

wrapper(axios);

const handler = async (req: any, res: any) => {
    const { method, body } = req;

    if (method === 'POST') {
        try {
            res.statusCode = 200;

            const cookieJar = new CookieJar();
            let url = `${process.env.NEXT_PUBLIC_ENGINE_URL}/api/v1/oauth/via/${body['provider']}?`;
            delete body['provider'];

            const qsParams = new URLSearchParams(body);
            qsParams.set('engine', 'fst');

            url += qsParams.toString();
            // console.log(url)
            try {
                await axios.get(url, {
                    withCredentials: true,
                    maxRedirects: 0,
                    jar: cookieJar
                });
            } catch (err: any) {
                if (err.response.status === 302) {
                    const redirectLocation = err.response.headers['location'];
                    const dict: Record<string, any> = {};
                    const cookies = await cookieJar.getCookies(url);
                    cookies.forEach((c) => {
                        dict[c.key] = c.value;
                    });

                    res.json({
                        status: true,
                        session_id: dict['session-id'] + '/' + dict['_goth_fiber'],
                        redirect_url: redirectLocation
                    });

                    return;
                } else {
                    throw err;
                }
            }

            res.json({ status: false });
        } catch (e) {
            handleServerError(res, e);
        }
        return;
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
};

export default handler;
