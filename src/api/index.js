const sendMail = () => {
    console.log("sending Mail")
    return(
        new Promise(resolve => setTimeout(resolve, 2000))
    )
}

export default {
    sendMail
}