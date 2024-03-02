import { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import BookCard from "../utils/BookCard";

const Catalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get("/api/book/getall", {
          withCredentials: true,
        });
        setBooks(response.data.books);
      } catch (err) {
        console.log(err);
      }
    };
    getAll();
    console.log(books);
  }, []);

  return (
    <div
      className="container-fluid"
      style={{ minHeight: "100vh", maxHeight: "auto" }}
    >
      <div className="position-relative">
        <img src={"/p2-title-img-01.jpg"} alt="img" width={"100%"} />
        <div
          className="position-absolute d-flex flex-column  align-items-center justify-content-center"
          style={{ top: 0, left: 0, right: 0, height: "100%" }}
        >
          <p className="catalogTitle display-1 display-md-1 display-sm-3" style={{fontFamily: "Merriweather ",
  fontWeight: "200",
  fontStyle: "normal",}}>
            Book Collection
          </p>
          <hr
            className="border border-danger border-2 opacity-50  w-md-25"
            style={{ width: "5%" }}
          />
          <span className="text-muted text-center d-none d-md-block">
            At vero eos et accusamus et iusto od sit amet est lorem <br /> ipsum
            nisi liqua gnissimos ducimus bland.
          </span>
        </div>
      </div>
      <div
        className="container-fluid d-flex overflow-y-auto "
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflowX: "auto",
          paddingBottom: "20px",
        }}
      >
        {books &&
          books.map((book) => {
            return (
              <BookCard
                key={book._id}
                description={book.description}
                title={book.title}
                imageUrl={book.coverImage.url}
                id={book._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Catalog;
