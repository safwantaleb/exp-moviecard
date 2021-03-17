import Home from "./components/Home";
import Trailer from "./components/Trailer";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import React from "react";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/trailer/:moviesId" component={Trailer} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
