import logo from './logo.svg';
import './App.css';
import SentSmsList from './components/SentSmsList';
import { useSetSmsStore } from './hooks/useSentSmsStore';
import { SendSmsForm } from './components/SendSmsForm';

function App() {
    const { sentSmses, sendNewSms } = useSetSmsStore();

    return (
        <div className="container mx-auto max-w-screen-lg pt-10">
            <SendSmsForm sendSms={sendNewSms} />
            <SentSmsList sentSmsList={sentSmses}></SentSmsList>
        </div>
    )
    /*(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
