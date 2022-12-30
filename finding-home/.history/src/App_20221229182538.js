import "./App.css";
import { useAuth } from "./context/authContext";

function App() {
  const { user, logout } = useAuth();

  if (user) return ( 
  <div>
  <h2>Hello {user.email}</h2>
  <button onClick={logout}>LOGOUT</button>
  </div>
  );
  
  return <div className='App'></div>;
  
}

export default App;