import axios from 'axios'

const URL = `http://localhost:3001/ms-mail-sender`

const sendMail = ({ from, to, subject, html }) =>
  axios.post(`${URL}/sendMail`, {
    from,
    to,
    subject,
    html
  })

export default {
  sendMail
}
