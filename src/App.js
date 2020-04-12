import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import Movies from './components/Movies';
import Header from './components/header/Header';
import Home from './pages/Home';
import Games from './pages/Games';
import Favorite from './pages/Favorite';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

import { createStore, applyMiddleware } from "redux";
import { Provider }  from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => (
    // root element, колкото да не гърми react, все едно да сложим <div> </div>
    <>
        <Header/>
        <div className="container mt-5">
            {props.children}
        </div>
    </>
);

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
        // <Home/> после го взимаме с props.children
    },
    {
        path: '/games',
        exact: true,
        main: () => <Layout>
            <Games/>
        </Layout>
    },
    {
        path: '/gallery',
        exact: false,
        main: () => <Layout>
            <Movies/>
        </Layout>
    },
    {
        path: '/favorite',
        exact: false,
        main: () => <Layout>
            <Favorite/>
        </Layout>
    },
    {
        path: '/popularmovies',
        exact: true,
        main: () => <Layout>
            <MovieList/>
        </Layout>
    },
    {
        path: '/moviedetails/:id',
        exact: false,
        main: () => <Layout>
            <MovieDetails/>
        </Layout>
    },
];

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route key={index} exact={route.exact} path={route.path}>
            {route.main}
        </Route>;
    });
}

function App() {
    return <Provider store={store}>
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    </Provider>
}

export default App;
