import './App.css';
import { useAuth } from './context/authContext';

function App() {
  const {user} =useAuth


 
  return (
    

    <div className="App">
    
    Hello World!
    </div>
  );
}

export default App;
