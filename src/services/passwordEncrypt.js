import bcrypt from 'bcryptjs'

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

const comparePassword = (password, hashedPassword) => {
  const hash = bcrypt.compare(password, hashedPassword, (err, isMatch) => {
    if (err) {
      console.log(err)
    } else if (!isMatch) {
      console.log('Password does not match')
    } else {
      console.log('Password matched')
    }
  })
  return hash
}

export { encryptPassword, comparePassword }
