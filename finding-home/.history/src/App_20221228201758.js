import './App.css';
import { useAuth } from './context/authContext';

function App() {
  const {user} =useAuth


 
  return (
    

    <div className="App">
        { if(user) return <div>{user.email}</div>{}
    </div>
  );
}

export default App;
