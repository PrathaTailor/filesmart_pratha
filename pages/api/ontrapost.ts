import { handleServerError } from './common'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.ontraport.com/1/',
  timeout: 30000,
  headers: {
    'Api-Key': 'tA0MQwN6ijDKoP1',
    'Api-Appid': '2_205191_DDKJwrsx9',
  },
})
const handler = async (req: any, res: any) => {
  const {
    method,
    body: { userId, appId, hostname },
  } = req
  if (method === 'POST') {
    const payload = {
      f1824: appId,
      f1817: userId,
      contact_cat: process.env.ONTRAPORT_CONTACT,
      owner: process.env.ONTRAPORT_OWNER,
      website: hostname,
    }

    try {
      const response = await instance.post('Contacts/saveorupdate', payload, {
        timeout: 2000,
      })
      res.statusCode = 200
      if (response.status === 200) {
        res.json({ status: true })
        return
      }
      res.json({ status: true })
    } catch (e: any) {
      if (e.code === 'ECONNABORTED') {
        res.json({ status: true, message: 'ontraport timeout' })
      }
      console.error(e)
      handleServerError(res, e)
    }
    return
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${method} Not Allowed`)
}

export default handler
