import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

// Components
import Form from "./Components/Form.js";
import Home from "./Components/Home.js";
import Exit from "./Components/Exit.js";
import ErrorPage from "./Components/ErrorPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
            <Route exact path="/exit">
              <Exit />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
