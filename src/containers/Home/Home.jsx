import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ArticleCard from '../../components/Card/ArticleCard';
import './style.scss';
import Footer from '../../components/Footer/Footer';

export default class Home extends Component {
  state = {};

  render() {
    return (
      <div id="home">
        <NavBar />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-md-10">
              <ArticleCard />
            </div>
            <div className="col col-md-2">
              <h2>Hello world</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
