import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import MainShopPage from './Pages/MainShopPage';
import Cart from './Pages/Cart';
import Unicorn from './Pages/Unicorn';
import Cloud from './Pages/Cloud';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/shop"} component={MainShopPage}/>
                    <Route exact path={'/cloud'} component={Cloud}/>
                    <Route exact path={'/unicorn'} component={Unicorn}/>
                    <Route exact path={"/cart"} component={Cart}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
