import {BrowserRouter} from 'react-router-dom'
import './App.css';
import MainComponent from './components/MainComponent';
import { AuthProvider } from './config/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <MainComponent/>
        </BrowserRouter>
      </AuthProvider>
    </div>
    
  );
}

export default App;
