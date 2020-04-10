import { text } from 'micro'
import { parse } from 'querystring'
import { NowRequest, NowResponse } from '@now/node'

export default async (req: NowRequest, res: NowResponse) => {
  const body = parse(await text(req))
  let result, attachments

  try {
    result = body.text
  } catch (error) {
    result = error.message
    attachments = [{ text: error.stack }]
  }

  const message = '\`' + body.text + '\`: ' + result
  const response_type = 'in_channel'

  res.writeHead(200, { 'Content-Type': 'application/json' })

  res.end(JSON.stringify({ response_type, text: message, attachments }))
}
