import React from "react";
import fetchNews from "../../fetchNews";
import "./NewsDetail.css";
import Error404 from "../errors/error404";

class NewsDetail extends React.Component {
  constructor() {
    super();
    this.state = { item: null };
  }

  async componentDidMount() {
    try {
      let item;
      const id = this.props.match.params.id;

      const res = await fetchNews();

      const items = [...res];

      item = items.find(
        (element) => element.querySelector("guid").textContent == id
      );
      console.log(item);
      this.setState({ item });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    {
      if (this.state.item) {
        return (
          <div>
            <div className="logo-container">
              <img
                src="https://www.ndtv.com/common/header/images/ndtv_logo_black.gif"
                alt="NDTV Logo"
              />
            </div>
            <div className="div-container">
              <div className="ui huge header">
                {this.state.item.querySelector("title").textContent}
              </div>
              <div className="extra">
                <div className="ui label">{`Update at : ${
                  this.state.item.querySelector("updatedAt").textContent
                }`}</div>
              </div>
              <hr className="line" />
              <div className="img-container">
                <img
                  src={this.state.item.querySelector("fullimage").textContent}
                />
              </div>
              <hr className="line" />
              <div className="description">
                <p>
                  {this.state.item.querySelector("description").textContent}
                </p>
              </div>
              <div className="extra">
                <div className="ui label">{`Source : ${
                  this.state.item.querySelector("source").textContent
                }`}</div>
              </div>
            </div>
            <a
              className="ui floated primary button"
              href={this.state.item.querySelector("link").textContent}
              style={{ marginLeft: "45%", marginBottom: "20px" }}
            >
              More
              <i className="right chevron icon"></i>
            </a>
          </div>
        );
      } else if (this.state.item === null) return null;
      else return <Error404 />;
    }
  }
}

export default NewsDetail;
