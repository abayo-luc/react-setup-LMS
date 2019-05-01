import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './style.scss';

const ArticleCard = ({ item }) => {
  const { title, description, updatedAt } = item;
  return (
    <div className="card mb-3" style={{ maxWidth: '100%' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            // eslint-disable-next-line max-len
            src="https://res.cloudinary.com/nexpals/image/upload/v1530951150/cover_z7omnk.jpg"
            alt="img"
            className="card-img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                Last updated
                {' '}
                {moment(moment(updatedAt), 'YYYYMMDD').fromNow()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
ArticleCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};
export default ArticleCard;
