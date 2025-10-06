import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating";
import Price from "./Price";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current)
        {setImg(image);}
      }, 200);
    };
    return () => {
      //When component unmounts
      mountedRef.current = false;
    };
  });

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={img.src}
                alt=""
                className="book__img"
                // onLoad={imageLoaded}
              />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}

      {/* <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" onLoad={imageLoaded}/>
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price originalPrice={book.originalPrice} salePrice={book.salePrice} /> */}
    </div>
  );
};
export default Book;
