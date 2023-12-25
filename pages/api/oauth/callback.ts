import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar, Cookie } from 'tough-cookie';
import { handleServerError } from '../common';

wrapper(axios);

const handler = async (req: any, res: any) => {
    const { method, body } = req;

    if (method === 'POST') {
        try {
            const cookieJar = new CookieJar();
            const [sessionId, goth] = body['session_id'].split('/');
            const provider = body['provider'];
            let url = `${process.env.NEXT_PUBLIC_ENGINE_URL}/api/v1/oauth/token/${provider}?`;

            const c1 = new Cookie();
            c1.key = 'session-id';
            c1.value = sessionId;
            const c2 = new Cookie();
            c2.key = '_goth_fiber';
            c2.value = goth;

            cookieJar.setCookie(c1, url);
            cookieJar.setCookie(c2, url);

            res.statusCode = 200;

            delete body['provider'];
            delete body['session_id'];
            const qsParams = new URLSearchParams(body);
            url += qsParams.toString();

            try {
                await axios.get(url, {
                    withCredentials: true,
                    maxRedirects: 0,
                    jar: cookieJar
                });
            } catch (err: any) {
                if (err.response.status === 302 || err.response.status === 307) {
                    let redirectLocation = err.response.headers['location'];
                    const userId = err.response.headers['uid'];

                    if (redirectLocation.indexOf('https://') < 0) {
                        redirectLocation = `${process.env.NEXT_PUBLIC_ENGINE_URL}/${redirectLocation}`;
                    }
                    const redirectLocationUrl = new URL(redirectLocation);
                    const qsParams = redirectLocationUrl.searchParams;

                    let event = qsParams.get('event');
                    if (qsParams.get('must_consent') === '1') {
                        event = 'register';
                    }

                    res.json({
                        status: true,
                        token: qsParams.get('t'),
                        event: event,
                        userId: userId
                    });

                    return;
                } else {
                    if (err.response.data) {
                        res.json({ status: false, error: err.response.data });
                        return;
                    }
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
