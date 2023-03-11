import mailer from '../../config/mailer.js'
import 'dotenv/config'

const user = process.env.MAILERUSER

const registerMail = async (firsName, lastName, email) => {
  await mailer.sendMail({
    from: '"Pink Neon 👻" <jeannypinkneon2023@gmail.com>',
    to: 'nidaliaamtz@hotmail.com',
    subject: 'Welcome',
    text: 'Welcome to Pink Neon',
    html: '<b>Thank you for signing up with us</b>',
  })
}

export default registerMail
