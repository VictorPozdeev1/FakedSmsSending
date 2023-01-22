import { useCallback, useState } from "react";
import { ISmsToSend } from "../models/ISmsToSend";

interface ISendSmsFormProps {
    sendSms: (smsToSend: ISmsToSend) => Promise<void>;
}

export function SendSmsForm({ sendSms }: ISendSmsFormProps) {
    const [isAlreadySent, setIsAlreadySent] = useState(false);
    const [receiverPhoneNo, setReceiverPhoneNo] = useState<string>('');
    const [senderName, setSenderName] = useState<string>('');
    const [smsText, setSmsText] = useState<string>('');

    const handleSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault();
        sendSms({
            receiverPhoneNo,
            senderName,
            text: smsText
        });
        setIsAlreadySent(true);
    }, [receiverPhoneNo, senderName, smsText]);

    if (isAlreadySent)
        return (
            <button
                className='block mx-auto border bg-slate-300 text-lg text-center p-3 hover:bg-slate-200'
                onClick={() => { setIsAlreadySent(false); setSmsText('') }}
            >
                Сообщение отправлено. Отправить ещё одно?
            </button>
        )

    return (
        <form
            onSubmit={handleSubmit}
            className={isAlreadySent ? 'pointer-events-none opacity-40' : ''}
        >
            <fieldset className="h-32 text-slate-600">
                <legend className='text-center text-2xl font-bold'>
                    Отправка смс
                </legend>
                <div className='flex gap-3 py-2 px-2'>
                    <label
                        htmlFor="receiverPhoneNo"
                    >
                        Номер получателя
                        <abbr title="Обязательно к заполнению">* </abbr>
                        :
                    </label>
                    <input
                        type='text'
                        className="border basis-1 grow"
                        id="receiverPhoneNo"
                        placeholder='Например, 79991234567'
                        value={receiverPhoneNo}
                        onChange={event => setReceiverPhoneNo(event.target.value)}
                    />
                    <label
                        htmlFor="senderName"
                    >
                        Имя отправителя:
                    </label>
                    <input
                        type='text'
                        className="border basis-1 grow"
                        placeholder='Введите Ваше имя'
                        value={senderName}
                        onChange={event => setSenderName(event.target.value)}
                    />
                </div>
                <div className='flex gap-1 place-content-end py-2 px-2'>
                    <label
                        htmlFor="smsText"
                    >
                        Текст смс
                        <abbr title="Обязательно к заполнению">* </abbr>
                        :
                    </label>
                    <textarea
                        className='grow resize-none border'
                        placeholder='Введите текст смс...'
                        id="smsText"
                        value={smsText}
                        onChange={event => setSmsText(event.target.value)}
                    />
                    <input
                        type='submit'
                        className='flex-none border bg-slate-300 text-lg text-center p-3 hover:bg-slate-200'
                        readOnly
                        value='Отправить смс!'
                    />
                </div>
            </fieldset>
        </form>
    )
}