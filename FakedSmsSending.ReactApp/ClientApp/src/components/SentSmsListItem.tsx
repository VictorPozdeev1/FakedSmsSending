import { ISentSms, SmsSendingStatus } from "../models/ISentSms"

interface ISentSmsProps {
    sentSms: ISentSms
}

export default function SentSmsListItem({ sentSms }: ISentSmsProps) {
    const TW_TD_COMMON_CLASSES = "border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400";
    return (
        <tr>
            <td className={TW_TD_COMMON_CLASSES}>{sentSms.id}</td>
            <td className={TW_TD_COMMON_CLASSES}>{sentSms.text}</td>
            <td className={TW_TD_COMMON_CLASSES}>{sentSms.senderName ?? '<Mr Nobody>'}</td>
            <td className={TW_TD_COMMON_CLASSES}>{sentSms.receiverPhoneNo}</td>
            <td className={TW_TD_COMMON_CLASSES}>{sentSms.sendingDateTime.toLocaleString()}</td>
            <td className={TW_TD_COMMON_CLASSES}>{SmsSendingStatus[sentSms.sendingStatus]}</td>
        </tr>
    )
}