import "./App.css";
import { useAuth } from "./context/authContext";

function App() {
  const { user } = useAuth();

  if (user) return ( 
  <div>
  <h2></h2>
  </div>)
  return <div className='App'>Hello World</div>;
  
}

export default App;