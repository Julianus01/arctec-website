import axios from "axios"

const sendMail = ({ from, to, subject, content }) =>
  axios.post("//localhost:3001/sendMail", {
    from,
    to,
    subject,
    content
  })

export default {
  sendMail
}
