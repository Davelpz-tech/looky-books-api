import Modal from "../Modal/Modal";
import "./Card.scss";

import { useState } from "react";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        console.log(item);
        return (
          <>
            <div
              className="card"
              id={item.accessInfo.id}
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <div className="left">
                <img src={thumbnail} alt="" />
              </div>
              <div className="right">
                <h3 className="book-title">{item.volumeInfo.title}</h3>
                <p className="book-author">{item.volumeInfo.authors}</p>
                <p className="book-price">{price}</p>
                <p className="book-description">
                  {item.volumeInfo.description}
                </p>
                <p className="book-category">
                  Category: <span>{item.volumeInfo.categories}</span>
                </p>
              </div>
            </div>
            <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
          </>
        );
      })}
    </>
  );
};

export default Card;
