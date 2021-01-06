import react from "react";

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import Cart from "./components/Cart";
import CharacterDetail from "./components/CharacterDetail";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// LOTR API
// https://the-one-api.dev/documentation
// Registered email address: thecrosswebear@gmail.com

// Access token: TsTj0xaaOHt36z7t6NOu (Include this in your API calls!)

//All routes must be prefixed with https://the-one-api.dev/v2. Only the /book endpoint is available without authentication.

function App() {
  return (
    <Router>
        <div className="App">
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route path="/shop/:id" component={CharacterDetail}></Route>
                    <Route path="/cart" component={Cart}/>
                </Switch>
            </div>
        </div>
    </Router>
  );
}

// const Home = () => {
//     <div>
//         <h1>Home page</h1>
//     </div>
// }
export default App;
