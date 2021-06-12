// import logo from './logo.svg';
import './App.css';
import Home from "./views/Home";
import New from "./views/New";
import Edit from "./views/Edit";
import { Link, Router } from "@reach/router";
import Details from './views/Details';

function App() {
  return (
    <div className="App">
       <Link to="/new">Add a pet to the shelter </Link> | <Link to="/">Back to Home</Link>
      <Router>
        <Home path="/" />
        <New path="/new" />
        <Edit path="/edit/:id" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
