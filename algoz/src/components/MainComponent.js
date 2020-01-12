import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import BubbleCard from './CardComponent';
import Insertion from './InsertionComp';

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const HomePage = () => {
      return(
          <Home/>
      );
    }

    const BubbleSortCard = () => {
      return(
        <BubbleCard/>
      )
    }
    const InsertionSort = () => {
      return(
        <Insertion />
      )
    }
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/BubbleSort" component={BubbleSortCard} />
          <Route exact path="/insertion" component={InsertionSort} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </Router>
    );
}
}

export default Main;
