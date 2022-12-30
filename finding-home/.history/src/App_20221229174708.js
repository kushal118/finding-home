import "./App.css";
import { useAuth } from "./context/authContext";

function App() {
  const { user } = useAuth();

  if (user) return ( 
  <div>
  </div>;
  return <div className='App'>Hello World</div>;
  )
}

export default App;