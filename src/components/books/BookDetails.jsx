import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const [editingMode, setEditingMode] = useState(false);
  const { id } = useParams();
  const navigateTo = useNavigate();

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Mystery",
    "Fantasy",
    "Biography",
    "History",
    "Self-Help",
  ];

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/book/${id}`, {
          withCredentials: true,
        });
        setBook(response.data.book);
      } catch (error) {
        toast.error(error.response.data.message);
        setBook({});
      }
    };
    fetchBook();
  }, []);

  const handleUpdateJob = async () => {
    try {
      const response = await axios.put(`/api/book/update/${id}`, book, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setEditingMode(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleJobDelete = async () => {
    try {
      const response = await axios.delete(`/api/book/delete/${id}`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      navigateTo("/books");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleInputChange = (field, value) => {
    setBook((prevBook) => ({
      ...prevBook,
      [field]: value,
    }));
  };

  return (
    <div
      className="container "
      style={{ minHeight: "100vh", maxHeight: "auto" }}
    >
      <h3 style={{fontFamily: "Merriweather ",
  fontWeight: "200",
  fontStyle: "normal",textAlign:"center",margin:"5px"}}>Book Details</h3>
      {book && book.coverImage && (
        <div className=" container-fluid row my-5  ">
          <div className="col-lg-6">
            <div className="">
              <label
                style={{ margin: "8px", textAlign: "left", width: "100%" }}
              >
                Title:
              </label>
              <input
                type="text"
                disabled={!editingMode}
                value={book.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                style={{
                  marginLeft: "8px",
                  padding: "8px",
                  width: "40%",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />

              <label
                style={{ margin: "8px", textAlign: "left", width: "100%" }}
              >
                Author:
              </label>
              <input
                type="text"
                disabled={!editingMode}
                value={book.author}
                onChange={(e) => handleInputChange("author", e.target.value)}
                style={{
                  marginLeft: "8px",
                  padding: "8px",
                  width: "40%",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />

              <label
                style={{ margin: "8px", textAlign: "left", width: "100%" }}
              >
                Genre :
              </label>

              <select
                value={book.genre}
                disabled={!editingMode}
                onChange={(e) => {
                  handleInputChange("genre", e.target.value);
                }}
                style={{
                  marginLeft: "8px",
                  padding: "8px",
                  width: "40%",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>

              <label
                style={{ margin: "8px", textAlign: "left", width: "100%" }}
              >
                Description:
              </label>
              <textarea
                rows="10"
                cols={10}
                value={book.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                style={{
                  marginLeft: "8px",
                  padding: "8px",
                  width: "100%",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
                disabled={!editingMode}
              />
            </div>
            <div className="d-flex justify-content-center">
              <div className="mx-2 p-3">
                {editingMode ? (
                  <>
                    <button
                      onClick={() => handleUpdateJob()}
                      className=" my-4 mx-1 btn btn-outline-secondary btn-md "
                    >
                      {" "}
                      <FaCheck />{" "}
                    </button>
                    <button
                      onClick={() => setEditingMode(false)}
                      className=" my-4 mx-1 btn btn-outline-secondary btn-md "
                    >
                      {" "}
                      <RxCross2 />{" "}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setEditingMode(true)}
                      className=" my-4  btn btn-outline-secondary btn-md "
                    >
                      Edit{" "}
                    </button>
                  </>
                )}
              </div>
              <div className="mx-2 p-3">
                <button
                  onClick={() => handleJobDelete()}
                  className=" my-4 btn btn-outline-secondary btn-md "
                >
                  Delete{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-5">
            <img
              src={book.coverImage.url}
              alt="img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
