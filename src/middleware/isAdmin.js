const isAdmin = (req, res, next) => {
  const { role } = req.user
  role === 'admin' ? next() : res.status(401).json({ message: 'Unauthorized' })
}

export default isAdmin
