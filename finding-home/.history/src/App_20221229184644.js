Skip to content
Product
Solutions
Open Source
Pricing
Search
Sign in
Sign up
Masterschool-Web
/
team_project_example
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
team_project_example/src/App.js /

David Rajcher fix: navigate to login, fixed logins navigate, fixed all profile inputs
Latest commit fc3cec8 on Nov 18
 History
 0 contributors
29 lines (25 sloc)  700 Bytes

import { useNavigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/authContext";

function App() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  if (user)
    return (
      <div>
        <h2>Hello {user.email}</h2>
        <button onClick={logout}>LOGOUT</button>
        <button onClick={() => navigate("/profile")}>PROFILE</button>
      </div>
    );
  return (
    <div className='App'>
      <h1>Open Doors</h1>
      <h2>Welcome!</h2>
      <button onClick={() => navigate("/login")}>LOGIN</button>
      <button onClick={() => navigate("/register")}>SIGNUP</button>
    </div>
  );
}

export default App;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
team_project_example/App.js at feat/db · Masterschool-Web/team_project_example · GitHub