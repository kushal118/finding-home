import './App.css';
import { useAuth } from './context/authContext';

function App() {
  const {user} =useAuth


 
  return (
    if(user){ return 
        <div>{user.email}</div>}
    
  );
}

export default App;
