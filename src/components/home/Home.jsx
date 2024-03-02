import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-page  container-fluid">
      <div className="row container-fluid">
        <div
          className="col-lg-6 d-flex ms-5  justify-content-center align-items-start flex-column "
          style={{ height: "100vh" }}
        >
          <h2 style={{ fontSize: "60px ", fontFamily: "Merriweather ,serif",
  fontWeight: "400",
  fontStyle: "normal", }}>
            What Book Are You <br /> Looking For?
          </h2>
          <p className="my-4">
            Not Sure What To Read Next? Explore Our Catalog
            <br />
            Of Books.
          </p>
          <button
            type="button"
            className=" my-4 btn btn-outline-secondary btn-lg "
          >
            <Link
              to={"/books"}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Explore Now
            </Link>{" "}
          </button>
        </div>
        <div
          className="col-lg-5 d-flex justify-content-center align-items-start  flex-column"
          style={{ height: "100vh" }}
        >
          <img
            src={"/p1-img-02.jpg"}
            alt="img"
            className="ms-4 p-0"
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
