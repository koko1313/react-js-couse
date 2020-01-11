import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import ReduxComponent from './components/ReduxComponent';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { createStore, applyMiddleware } from "redux";
import { Provider }  from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => (
    // root element, колкото да не гърми react, все едно да сложим <div> </div>
    <>
        <Header/>
        <div className="container mt-5">
            {props.children}
        </div>
        <Footer/>
    </>
);

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <FunctionalComponent/>
        </Layout>
    },
    {
        path: '/gallery',
        exact: false,
        main: () => <Layout>
            <ClassComponent/>
        </Layout>
    }
];

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route key={index} exact={route.exact} path={route.path}>
            {route.main}
        </Route>;
    });
}

function App() {
    return <Router>
        <Switch>
            {getRoutes()}
        </Switch>
    </Router>
}

export default App;
