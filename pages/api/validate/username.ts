// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleServerError } from '../common'
import axios from 'axios'

const handler = async (req: any, res: any) => {
  const {
    method,
    body: { username },
  } = req

  if (method === 'POST') {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_ENGINE_URL}/api/v1/utils/validate/username/${username}`,
        {}
      )
      res.statusCode = 200
      if (response.status === 200) {
        res.json({ status: true })
        return
      }
      res.json({ status: false, error: response.data.detail, token: null })
    } catch (e) {
      handleServerError(res, e)
    }
    return
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${method} Not Allowed`)
}

export default handler
