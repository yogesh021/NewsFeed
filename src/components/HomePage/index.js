import "./homePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="ui container" id="container">
      <img
        src="https://cdn.ndtv.com/common/images/ogndtv.png"
        style={{ height: "100%", width: "100%" }}
      />
      <Link to="/1" className="ui floated primary button" id="button">
        NDTV News Special
        <i className="right chevron icon"></i>
      </Link>
    </div>
  );
};

export default HomePage;
