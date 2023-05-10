import './App.css';
import { TransferForm } from './components/TransferForm';
import { ApiContextProvider } from './contexts';

function App() {
  return (
    <ApiContextProvider>
      <div className="app-container">
        <div className="header-container">Batch Transfer For Bittensor</div>

        <div className="main-container">
          <TransferForm />
        </div>
      </div>
    </ApiContextProvider>
  );
}

export default App;
