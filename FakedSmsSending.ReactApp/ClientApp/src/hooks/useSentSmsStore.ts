﻿import { useCallback, useState, useEffect } from 'react';
import { ISentSms } from '../models/ISentSms'
import { ISmsToSend } from '../models/ISmsToSend'
import axios from 'axios';

export function useSetSmsStore() {
    const API_URL = "https://localhost:7043/api/SentSmses";
    const [sentSmses, setSentMessages] = useState<ISentSms[]>([]);

    const fetchSentSmses = useCallback(async () => {
        const data = (await axios.get<ISentSms[]>(API_URL)).data;
        // sms.sendingDateTime is Date here in compilation-time, but is string in runtime. Can try axios transformResponse instead.
        data.forEach(sms => sms.sendingDateTime = new Date(sms.sendingDateTime));
        setSentMessages(data);
    }, []);

    const sendNewSms = useCallback(async (smsToSend: ISmsToSend) => {
        const smsSent = {
            ...smsToSend, sendingDateTime: new Date(), sendingStatus: 0
        }
        const justSentSms = (await axios.post<ISentSms>(API_URL, smsSent)).data;
        // sms.sendingDateTime is Date here in compilation-time, but is string in runtime. Can try axios transformResponse instead.
        justSentSms.sendingDateTime = new Date(justSentSms.sendingDateTime);
        setSentMessages(prev => [...prev, justSentSms]);
    }, []);

    useEffect(() => {
        fetchSentSmses();
    }, [fetchSentSmses]);

    return { sentSmses, sendNewSms }
}