import React, { Component } from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import './styles/blog.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogItem from './routes/BlogItem';
import blogListData from './data/blog/list';
import BlogListItem from './components/BlogListItem';

class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      item: null
    }
  }

  componentWillMount () {
    console.log('App will mount')
  }

  render() {
    const Item = this.state.item
    return (
      <Router basename="/build">
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Blog</h1>
            </header>
            {
              Item ? <Item /> : null
            }
            {/* list */}
            <Route exact path="/" render={({ match }) => (
              <div className="container">
              {
                blogListData.map((item, index) => (
                  <BlogListItem key={`${index}`} item={item} match={match} />
                ))
              }
              </div>
            )} />
            {/* list-item-detail */}
            <Route exact path="/item/:id" component={BlogItem} />
          </div>

        </div>
      </Router>
    );
  }

}

export default App;
