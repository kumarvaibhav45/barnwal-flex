export default (req, res) => {
  if (req.method !== 'POST' && req.method !== 'post') {
    return res.status(403).send({})
  }
  setTimeout(() => {
    res.status(200).json({ message: 'success' })
  }, 2000)
}
