import { useCallback, useState, useEffect } from 'react';
import { ISentSms } from '../models/ISentSms';
import { ISmsToSend } from '../models/ISmsToSend';
import api from '../api';
import { AxiosResponse } from 'axios';

export function useSetSmsStore() {
    const API_URL = "SentSmses";
    const [sentSmses, setSentSmses] = useState<ISentSms[]>([]);
    const [sentSmsesListIsLoading, setSentSmsesListIsLoading] = useState(false);

    const fetchSentSmses = useCallback(async () => {
        setSentSmsesListIsLoading(true);
        const data = (await api.get<ISentSms[]>(API_URL)).data;
        // sms.sendingDateTime is Date here in compilation-time, but is string in runtime. Can try axios transformResponse instead.
        data.forEach(sms => sms.sendingDateTime = new Date(sms.sendingDateTime));
        setSentSmses(data);
        setSentSmsesListIsLoading(false);
    }, []);

    const sendNewSms = useCallback(async (smsToSend: ISmsToSend) => {
        const justSentSms = (await api.post<ISentSms, AxiosResponse<ISentSms>, ISmsToSend>(API_URL, smsToSend)).data;
        // justSentSms.sendingDateTime is Date here in compilation-time, but is string in runtime. Can try axios transformResponse instead.
        justSentSms.sendingDateTime = new Date(justSentSms.sendingDateTime);
        setSentSmses(prev => [...prev, justSentSms]);
    }, []);

    useEffect(() => {
        fetchSentSmses();
    }, [fetchSentSmses]);

    return { sentSmsesListIsLoading, sentSmses, sendNewSms }
}