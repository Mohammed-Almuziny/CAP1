import Home from "./component/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">


        <Router>
        <Route path="/" component={Home} />
        </Router>
    
    </div>
  );
}

export default App;
