import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/common/Footer.jsx";
import Header from "./components/common/Header.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import MovieList from "./components/MovieList.jsx";
import NotFound from "./components/NotFound.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

function App(props) {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={MovieList} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </Provider>
  );
}

export default App;
