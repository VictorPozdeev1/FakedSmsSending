import logo from './logo.svg';
import './App.css';
import SentSmsList from './components/SentSmsList';
import { useSetSmsStore } from './hooks/useSentSmsStore';
import { SendSmsForm } from './components/SendSmsForm';

function App() {
    const { sentSmsesListIsLoading, sentSmses, sendNewSms } = useSetSmsStore();

    return (
        <div className="container mx-auto max-w-screen-lg pt-10">
            <SendSmsForm sendSms={sendNewSms} />
            <SentSmsList
                sentSmsList={sentSmses}
                sentSmsesListIsLoading={sentSmsesListIsLoading}
            />
        </div>
    )
}

export default App;
