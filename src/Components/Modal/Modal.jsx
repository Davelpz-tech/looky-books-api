import "./Modal.scss";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1 className="book-title">{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
          <a href={item.volumeInfo.previewLink}>
            <button className="read-btn">Read More</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
