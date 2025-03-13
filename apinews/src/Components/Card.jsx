import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => {

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center m-5">
      {data.map((element, index) => (
        <div className="card" style={{ width: '18rem' }} key={element.id || index}>
          <img 
            src={element.urlToImage || 'https://via.placeholder.com/150'} 
            className="card-img-top" 
            alt={element.title || 'Card image'}
          />
          <div className="card-body">
          <span className='fw-bolder'>{element.publishedAt}</span>
            <h5 className="card-title">{element.title || 'No Title Available'}</h5>
            <p className="card-text">
              {element.description || 'No description provided.'}
            </p>
            <a href={element.url || '#'} className="btn btn-primary" target='blank'>
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      urlToImage: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default Card;
