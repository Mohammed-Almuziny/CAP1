import Home from "./component/Home";
import Easy from "./component/Easy";
import Medim from "./component/Medim";
import Hard from "./component/Hard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/easy" component={Easy} />
        <Route exact path="/medim" component={Medim} />
        <Route exact path="/hard" component={Hard} />
      </Router>
    </div>
  );
}

export default App;
