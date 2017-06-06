import React from 'react';
import './Maincont.css';

const Thumbcont = ({ items }) => (
  <div className="thumbnail">
      <img className="img-responsive" src="http://placehold.it/800x300" alt=""/>
      <div className="caption-full">
          <h4 className="pull-right">$24.99</h4>
          <h4><a href="#">Product Name</a></h4>
          <p>See more snippets like these online store reviews at <a target="_blank" href="http://bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
          <p>Want to make these reviews work? Check out
              <strong><a href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this building a review system tutorial</a>
              </strong>over at maxoffsky.com!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="ratings">
          <p className="pull-right">3 reviews</p>
          <p>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
              4.0 stars
          </p>
      </div>
  </div>
);

export default Thumbcont;