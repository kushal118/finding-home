import './App.css';
import { useAuth } from './context/authContext';

function App() {
  const {user} =useAuth


 
  return (
    

    <div className="App">
     if(user) return <div>{user.email}</div>
    
    Hello World!
    </div>
  );
}

export default App;
