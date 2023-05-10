import './App.css';
import { TransferForm } from './components/TransferForm';
import { TransferSuccess } from "./components/TransferSuccess"

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        Batch Transfer For Bittensor
      </div>

      <div className="main-container">
        <TransferForm />
      </div>
    </div>
  );
}

export default App;
