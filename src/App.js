import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/register" exact={true} component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
