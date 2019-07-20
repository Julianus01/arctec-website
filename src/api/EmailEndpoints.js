import axios from "axios"

const URL = `/localhost:3001/sendMail`

const sendMail = ({ from, to, subject, content }) => axios.post(URL, { from, to, subject, content })

export default { sendMail }
