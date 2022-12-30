import { Navigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/authContext";

function App() {
  const { user, logout } = useAuth();

  if (user)
   return ( 
  <div>
  <h2>Hello {user.email}</h2>
  <button onClick={logout}>LOGOUT</button>
  </div>
  );
  
  return 
  (<div className='App'>
    <h1>Open Doors</h1>
    <h2>Welcome!</h2>
    <button onClick={()=> Navigate("/login")}>Login</button>
    

  </div>)
  
}

export default App;