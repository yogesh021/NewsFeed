import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import fetchNews from "./fetchNews";

import NewsFeedContext from "./context/newsFeedContext";

import HomePage from "./components/HomePage";
import NewsFeed from "./components/NewsFeed";
import NewsDetail from "./components/NewsDetail";
import Error404 from "./components/errors/error404";

class App extends React.Component {
  constructor() {
    super();
    this.state = { newsItems: [] };
  }

  componentDidMount() {
    let res = null;
    fetchNews().then((result) => {
      res = result;
      const newsItems = [...res];
      this.setState({ newsItems });
    });
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/:pageNo"
            exact
            render={(props) => (
              <NewsFeedContext.Provider value={this.state.newsItems}>
                <NewsFeed {...props} />
              </NewsFeedContext.Provider>
            )}
          />
          <Route
            path="/detail/:id"
            exact
            render={(props) => <NewsDetail {...props} />}
          />
          <Route path="/" component={Error404} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
