import { text } from 'micro'
import { parse } from 'querystring'
import { NowRequest, NowResponse } from '@now/node'
import { makeScrabbleText } from '../lib/scrabbler'

export default async (req: NowRequest, res: NowResponse) => {
  const body = parse(await text(req))
  let message: string, attachments

  try {
    if (typeof body.text === 'string') {
      message = makeScrabbleText(body.text)
    } else {
      message = makeScrabbleText(body.text[0])
    }

  } catch (error) {
    message = error.message
    attachments = [{ text: error.stack }]
  }

  const response_type = 'in_channel'

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ response_type, text: message, attachments }))
}
