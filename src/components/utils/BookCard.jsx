import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookCard = ({ imageUrl, description, title,id}) => {
  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  return (
    <div className="card" style={{ width: "10rem", height: "18rem",margin:"10px", }}>
      <img
        src={imageUrl}
        className="card-img"
        style={{ margin: "0" }}
        alt="..."
        height={150}
      />
      <div className="">
        <p style={{ fontSize: "15px", margin: "5px",textAlign:"center" ,fontFamily: "Merriweather ",
  fontWeight: "200",
  fontStyle: "normal",}}>
          {title}
        </p>
        <p style={{ fontSize: "10px", margin: "5px", padding: "0px", textAlign:'justify'}}>
          {truncatedDescription}
        </p>

        <button
          type="button"
          className="btn btn-outline-secondary btn-sm  mx-5"
        >
          <Link
           to={`/books/${id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Read
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BookCard;

BookCard.propTypes = {
  imageUrl: PropTypes.node,
  description: PropTypes.node,
  title: PropTypes.node,
  id:PropTypes.node,
};
