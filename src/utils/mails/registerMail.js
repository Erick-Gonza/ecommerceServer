import mailer from '../../config/mailer.js'
import 'dotenv/config'

const user = process.env.MAILERUSER

const registerMail = async(firstName, email) => {
    await mailer.sendMail({
        from: `"Fred Foo 👻" ${user}`,
        to: `${email}`,
        subject: 'Welcome to Pink Neon',
        //text: 'Hello world?',
        html: `<h2>Thanks for signing up ${firstName}</h2>`,
    })
}

export default registerMail