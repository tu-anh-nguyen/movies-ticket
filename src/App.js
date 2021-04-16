import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dang-nhap/" exact component={Login} />
          <Route path="/dang-ky/" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return <HomePage />;
}

function Login() {
  return <LoginPage />;
}

function Register() {
  return <RegisterPage />;
}
