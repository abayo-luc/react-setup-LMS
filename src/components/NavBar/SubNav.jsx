import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link, withRouter } from 'react-router-dom';

const SubNav = ({ history }) => {
  const { location } = history;
  const { category: queryCategory } = queryString.parse(location.search);
  return (
    <div id="sub-nav">
      <div className="nav-links">
        <ul className="links">
          {[
            'Economic',
            'Culture',
            'Tech',
            'Politics',
            'Health',
            'Science',
            'Art',
          ].map((category, index) => (
            <li key={Number(index)}>
              <Link
                to={`/articles?category=${category}`}
                className={category === queryCategory ? 'active' : ''}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
SubNav.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.string,
  }),
};

SubNav.propTypes = {
  history: {
    location: '',
  },
};
export default withRouter(SubNav);
