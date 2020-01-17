import React from "react";
import { connect } from "react-redux";
import { setFavorites, deleteFavorites } from "../actions";
import PropTypes from "prop-types";
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";

const CarouselItem = props => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorites = () => {
    props.setFavorites({
      id,
      cover,
      title,
      year,
      contentRating,
      duration
    });
  };
  const handleDeleteFavorites = itemId => {
    props.deleteFavorites(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={playIcon}
            alt='Play Icon'
          />
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Remove icon'
              onClick={() => handleDeleteFavorites(id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavorites}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

// proptypes sirve para poder validar los tipos de datos que mandamos

CarouselItem.proptypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
};

const mapDispachToProps = {
  setFavorites,
  deleteFavorites
};

//export default CarouselItem;
export default connect(null, mapDispachToProps)(CarouselItem);
