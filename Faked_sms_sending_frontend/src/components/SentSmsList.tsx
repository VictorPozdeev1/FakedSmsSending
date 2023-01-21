import { ISentSms } from "../models/ISentSms";
import SentSmsListItem from '../components/SentSmsListItem';

interface ISentSmsListProps {
    sentSmsList: ISentSms[]
}

export default function SentSmsList({ sentSmsList }: ISentSmsListProps) {
    const TW_CAPTION_COMMON_CLASSES = "text-2xl font-bold p-5 text-slate-600";
    const TW_TH_COMMON_CLASSES = "border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left"; //pl-8, ..., ..., pr-8 ?
    return (
        <table className="table-auto mx-auto">
            <caption className={TW_CAPTION_COMMON_CLASSES}>Отправленные смс</caption>
            <thead>
                <tr>
                    <th className={TW_TH_COMMON_CLASSES}>Id</th>
                    <th className={TW_TH_COMMON_CLASSES + ' max-w-80'}>Text</th>
                    <th className={TW_TH_COMMON_CLASSES}>Sender name</th>
                    <th className={TW_TH_COMMON_CLASSES}>Receiver Phone No</th>
                    <th className={TW_TH_COMMON_CLASSES}>Sending time</th>
                    <th className={TW_TH_COMMON_CLASSES}>Sending status</th>
                </tr>
            </thead>
            <tbody>
                {sentSmsList
                    .sort((a, b) => b.sendingDateTime.getTime() - a.sendingDateTime.getTime())
                    .map(m => <SentSmsListItem sentSms={m} key={m.id} />)}
            </tbody>
        </table>
    )
}