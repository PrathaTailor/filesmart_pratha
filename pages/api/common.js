import { CookieJar } from 'tough-cookie'
import * as Sentry from '@sentry/nextjs'

export const handleServerError = (res, e) => {
  res.statusCode = 200
  const errTxt = JSON.stringify(e)
  try {
    if (e.response.data && e.response.data.detail) {
      res.json({ status: false, error: e.response.data.detail, token: null })
      return
    }
  } catch (er) {
    Sentry.captureException(er, 'failedDuringErrorHandle')
  }

  Sentry.captureException(e, 'Api Request failed')

  res.json({
    status: false,
    error: 'Server Error! Please wait a minute and try again...',
    token: null,
    raw: errTxt,
  })
}

export const getCookieJar = (redHash) => {
  let cookieJar = new CookieJar()
  try {
    if (redHash !== '') {
      return CookieJar.fromJSON(redHash)
    }
  } catch (e) {
    return cookieJar
  }
}

export const toHeaders = (req) => {
  let ip = ''
  if ('x-forwarded-for' in req.headers) {
    ip = req.headers['x-forwarded-for']
  } else if ('x-real-ip' in req.headers) {
    ip = req.headers['x-real-ip']
  } else {
    if (req.connection && req.connection.remoteAddress) {
      ip = req.connection.remoteAddress
    }
  }
  if (ip.substr(0, 7) === '::ffff:') {
    ip = ip.substr(7)
  }

  const headers = JSON.parse(JSON.stringify(req.headers))

  headers['x-forwarded-for'] = ip
  headers['x-real-ip'] = ip
  headers['sec-fetch-dest'] = 'empty'
  headers['sec-fetch-site'] = 'cross-site'
  delete headers['cookie']
  delete headers['host']
  delete headers['content-length']
  delete headers['connection']
  delete headers['via']
  delete headers['content-type']

  return headers
}
