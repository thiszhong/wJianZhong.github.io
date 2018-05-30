import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/common.css';
import './styles/blog.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BlogDetails from './routes/BlogDetails';
import blogListData from './data/blogList';
import BlogListItem from './components/BlogListItem';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Blog</h1>
            </header>
            <div className="app-container">
            {
              blogListData.map((item, index) => (
                <BlogListItem key={`${index}`} item={item} />
              ))
            }
            </div>
            <Route exact path="/details" component={BlogDetails} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
