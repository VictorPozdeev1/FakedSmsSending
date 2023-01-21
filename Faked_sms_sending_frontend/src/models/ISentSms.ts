// status of sending sms by the server to the terminal receiver
export enum SmsSendingStatus {
    Sent,
    Received,
    SendingError
}

// sms sent by the server to the terminal receiver
export interface ISentSms {
    id: number,
    text: string,
    receiverPhoneNo: string,
    senderName?: string,
    sendingDateTime: Date,
    sendingStatus: SmsSendingStatus
}