import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import ArticleCard from '../../components/Card/ArticleCard';
import './style.scss';
import Footer from '../../components/Footer/Footer';

import fetchArticles from '../../store/actions/articles';

export class Home extends Component {
  componentWillMount() {
    const { fetchArticles: fetch } = this.props;
    fetch();
  }

  render() {
    const { articles } = this.props;
    return (
      <div id="home">
        <NavBar />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-md-10">
              {Object.keys(articles).map(key => (
                <ArticleCard key={key} item={articles[key]} />
              ))}
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

Home.propTypes = {
  articles: PropTypes.shape({}).isRequired,
  fetchArticles: PropTypes.func.isRequired,
};
const mapStateToProps = ({ articles }) => ({
  ...articles,
});
export default connect(
  mapStateToProps,
  { fetchArticles },
)(Home);
