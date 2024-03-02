import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Fiction");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

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

  const handleFileChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("coverImage", image);
    formData.append("description", description);

    try {
      const response = await axios.post("/api/book/post", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setTitle("");
      setAuthor("");
      setGenre("Fiction");
      setImage("");
      setDescription("");
      setImage(null);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px auto", padding: "30px " }}>
      <h1 style={{  fontFamily: "Merriweather ",
  fontWeight: "200",
  fontStyle: "normal",}}>Add Book</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label style={{ margin: "8px", textAlign: "left", width: "20%" }}>
          {" "}
          Title:
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            marginLeft: "8px",
            padding: "8px",
            width: "40%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <label style={{ margin: "8px", textAlign: "left", width: "100%" }}>
          Author :{" "}
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{
            marginLeft: "8px",
            padding: "8px",
            width: "40%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <label style={{ margin: "8px", textAlign: "left", width: "100%" }}>
          Genre :
        </label>

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
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

        <label style={{ margin: "8px", textAlign: "left", width: "100%" }}>
          Image :
        </label>
        <input
          type="file"
          accept=".jpg, .png, .webp"
          onChange={handleFileChange}
          style={{
            marginLeft: "8px",
            padding: "8px",
            width: "40%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <label style={{ margin: "8px", textAlign: "left", width: "100%" }}>
          Description:{" "}
        </label>
        <textarea
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            style={{
              backgroundColor: "#2ecc71",
              color: "#fff",
              padding: "12px 24px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "16px",
              fontWeight: "bold",
              width: "10%",
            }}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
