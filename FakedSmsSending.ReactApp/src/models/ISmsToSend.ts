// sms to be sent by the server to the terminal receiver
export interface ISmsToSend {
    text: string,
    receiverPhoneNo: string,
    senderName?: string
}