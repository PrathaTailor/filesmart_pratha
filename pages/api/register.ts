// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleServerError, toHeaders } from './common';
import axios from 'axios';

const handler = async (req: any, res: any) => {
    const {
        method,
        body: {
            password,
            firstName,
            lastName,
            email,
            phone,
            source,
            device_id,
            lead_id,
            search_source,
            product_focus,
            aff,
            osuserid,
            osappid,
            funnel,
            rtkclkid
        }
    } = req;

    const headers = toHeaders(req);
    if (method === 'POST') {
        const track: Record<string, any> = {};

        if (aff && aff != null) {
            track['aff_sub_id'] = aff.aff_sub_id;
            track['affiliate_id'] = aff.aff_id;
            track['transaction_id'] = aff.transaction_id;
        }

        track['device_id'] = device_id;
        track['lead_id'] = lead_id;
        track['one_signal_app_id'] = osappid;
        track['one_signal_user_id'] = osuserid;
        track['search_source'] = search_source;
        track['redtrack_click_id'] = rtkclkid;
        track['source'] = source === 'localhost' ? 'test.irsextension.online' : source;

        const engine = 'fst';

        const payload = {
            email,
            engine,
            first_name: firstName,
            last_name: lastName,
            funnel,
            ip_address: headers['x-forwarded-for'],
            password,
            product_focus,
            phone: phone ? phone.replace(/-/g, '') : '',
            t_info: track,
            user_agent: headers['user-agent']
        };

        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_ENGINE_URL + '/api/v1/oauth/register', payload);
            res.statusCode = 200;
            if (response.status === 200) {
                res.json({
                    status: true,
                    token: response.data.jwt_token,
                    userUid: response.data.profile.id
                });
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
