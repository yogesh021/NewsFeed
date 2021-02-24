import React from "react";
import { Link } from "react-router-dom";
import NewsFeedContext from "../../context/newsFeedContext";

import Pagination from "./pagination";
import "./NewsFeed.css";

class NewsFeed extends React.Component {
  returnPageFeed = (feed) => {
    const startIndex = 6 * this.returnPageNo();
    const endIndex = startIndex + 6;

    return feed.slice(startIndex, endIndex);
  };

  returnPageNo = () => {
    return this.props.match.params.pageNo - 1;
  };

  render() {
    return (
      <NewsFeedContext.Consumer>
        {(feed) => {
          return (
            <div className="ui container">
              <div className="header-container">
                <div className="ui huge header title">Current Feed Content</div>
                <div>
                  <img
                    src="https://www.ndtv.com/common/header/images/ndtv_logo_black.gif"
                    alt="NDTV Logo"
                  />
                </div>
              </div>
              <div className="ui divided items">
                {this.returnPageFeed(feed).map((item, index) => (
                  <div
                    className="item"
                    key={item.querySelector("guid").textContent}
                  >
                    <Link
                      className="image"
                      to={`/detail/${item.querySelector("guid").textContent}`}
                    >
                      <img src={item.querySelector("StoryImage").textContent} />
                    </Link>
                    <div className="content">
                      <Link
                        className="header"
                        to={`/detail/${item.querySelector("guid").textContent}`}
                      >
                        {item.querySelector("title").textContent}
                      </Link>
                      <div className="description">
                        <p>{item.querySelector("description").textContent}</p>
                      </div>
                      <div className="extra">
                        <div className="ui label">{`Posted : ${
                          item.querySelector("pubDate").textContent
                        }`}</div>
                        <Link
                          className="ui right floated primary button"
                          to={`/detail/${
                            item.querySelector("guid").textContent
                          }`}
                        >
                          Details
                          <i className="right chevron icon"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination {...this.props} />
            </div>
          );
        }}
      </NewsFeedContext.Consumer>
    );
  }
}

export default NewsFeed;
