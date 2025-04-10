import emailjs from 'emailjs-com'

// Utils
// import { emailRegex } from '@/utils/utils'

/**
 *  Sends email using emailJs
 */
export default function sendEmail() {
  const templateParams = {
    from_name: '',
    from_email: '',
    from_message: '',
  }
  console.log(templateParams)
  // If email and name checks, send email

  emailjs
    .send(
      process.env.EMAIL_JS_SERVICE_ID ?? '',
      process.env.EMAIL_JS_TEMPLATE_ID ?? '',
      templateParams,
      process.env.EMAIL_JS_PUBLIC_KEY ?? '',
    )
    .then(
      (res) => {
        console.log('SUCCESS!', res.status, res.text)
        alert('Message sent')
      },
      (err) => {
        // console.log('FAILED...', err);
        alert('Message failed, please try again...')
      },
    )
}
