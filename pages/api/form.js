export default async (req, res) => {
  if (req.method !== 'POST' && req.method !== 'post') {
    return res.status(403).send({})
  }
  // install nodemailer and html-sanitizer to send mail
  setTimeout(() => {
    res.status(200).json({ message: 'success' })
  }, 2000)
}
