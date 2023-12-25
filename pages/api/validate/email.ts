// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleServerError } from '../common'
import axios from 'axios'

const handler = async (req: any, res: any) => {
  const {
    method,
    body: { email },
  } = req

  if (method === 'POST') {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_ENGINE_URL + '/api/v1/utils/validate/email',
        { email }
      )
      res.statusCode = 200
      if (response.status === 200) {
        res.json({ status: true })
        return
      }
      // we shoulld probably never be there as error produces an exception
      res.json({ status: false, error: response.data.detail, token: null })
    } catch (e: any) {
      if (e.response.data && e.response.data.msg) {
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
