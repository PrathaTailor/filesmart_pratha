// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleServerError } from './common'
import axios from 'axios'
import  { NextApiRequest, NextApiResponse } from 'next'
import cookieParser from 'cookie-parser';

// Disable body parsing for this route
export const config = {
	api: {
	  bodyParser: false,
	},
  };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    body: { token },
  } = req
  res.statusCode = 200

  if (method === 'POST') {

	cookieParser()(req as any, res as any, () => {});

	const refreshToken = req.cookies['refresh-token'];

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_ENGINE_URL + '/oauth/refresh?refresh_token=' + refreshToken,
      )

      if (response.status === 200) {
        const userUid = response.data.profile.id
        const payload = {
          status: true,
          userUid,
          token: response.data.jwt_token,
        }

        const cookies = response.headers['set-cookie'];
        let refreshToken;
        cookies?.forEach(cookie => {
          if (cookie.includes('refresh-token')) {
            refreshToken = cookie.split(';')[0].split('=')[1];
          }
        });

        
        const expires = new Date(Date.now() + 1000 * 60 * 20); // 20 minutes from now
        res.setHeader('Set-Cookie', `refresh-token=${refreshToken}; HttpOnly; Expires=${expires.toUTCString()}`);

        
        res.json(payload)
        return
      }

      res.json({ status: false, error: response.data.detail, token: null })
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.msg) {
        res.json({ status: false, error: e.response.data.msg, token: null })
        return
      }

      handleServerError(res, e)
    }
    return
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${method} Not Allowed`)
}

export default handler
