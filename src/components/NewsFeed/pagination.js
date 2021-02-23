import React from "react";
import { Pagination as Paginate } from "semantic-ui-react";

import NewsFeedContext from "../../context/newsFeedContext";

class Pagination extends React.Component {
  state = { activePage: 1 };

  handlePaginationChange = (e, { activePage }) => {
    this.props.history.push(`/${activePage}`);
  };

  render() {
    const { activePage } = this.state;
    return (
      <NewsFeedContext.Consumer>
        {(feed) => (
          <Paginate
            activePage={this.props.match.params.pageNo}
            onPageChange={this.handlePaginationChange}
            defaultActivePage={
              Math.ceil(feed.length / 6) < 5 ? Math.ceil(feed.length / 6) : 5
            }
            disabled={feed.length === 0 ? true : false}
            totalPages={Math.ceil(feed.length / 6)}
            style={{ margin: "20px 30%" }}
          />
        )}
      </NewsFeedContext.Consumer>
    );
  }
}

export default Pagination;
