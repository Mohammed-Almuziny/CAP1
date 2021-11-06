import Home from "./component/Home";
import Easy from "./component/Easy";
import Medium from "./component/Medium";
import Hard from "./component/Hard";
import Win from "./component/Win";
import Lose from "./component/Lose";
import Instructions from "./component/Instructions";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/easy" component={Easy} />
        <Route exact path="/medim" component={Medium} />
        <Route exact path="/hard" component={Hard} />
        <Route exact path="/Win/:moves/:scoer" component={Win} />
        <Route exact path="/Lose" component={Lose} />
        <Route exact path="/Instructions" component={Instructions} />

        <Route path="*" render={()=>{
       return <h1>404</h1>;
     }} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
