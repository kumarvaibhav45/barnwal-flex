import nodemailer from 'nodemailer'
import sanitizeHtml from 'sanitize-html'

const MAILHOST = process.env.MAILHOST
const PASSKEY = process.env.PASSKEY
const MAILTO = process.env.MAILTO

export default async (req, res) => {
  if (req.method !== 'POST' && req.method !== 'post') {
    return res.status(403).send({})
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: MAILHOST,
      pass: PASSKEY,
    },
  })
  const cleanOpt = {
    allowedTags: [],
    allowedAttributes: {},
  }
  const mailOptions = {
    from: MAILHOST,
    to: MAILTO,
    subject: 'Quote Request',
    html: `<h1>New Quote Request</h1><p><b>Name:</b> ${sanitizeHtml(
      req.body.name,
      cleanOpt
    )}</p><p><b>Email:</b> ${sanitizeHtml(
      req.body.email,
      cleanOpt
    )}</p><p><b>Message:</b> ${sanitizeHtml(req.body.message, cleanOpt)}</p>`,
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    } else {
      return res.status(200).json({ message: 'Success' })
    }
  })
}
