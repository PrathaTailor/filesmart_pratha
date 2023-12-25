// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { toHeaders } from './common'

const handler = async (req, res) => {
  const { method } = req

  if (method === 'POST') {
    const headers = toHeaders(req)
    res.json({ status: true, ip: headers['x-real-ip'] })
    return
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${method} Not Allowed`)
}

export default handler
