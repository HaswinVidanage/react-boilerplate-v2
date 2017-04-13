var React = require('react');
var ReactDOM = require('react-dom');
//es6 object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');


ReactDOM.render(
   <Router history={hashHistory}>
     <Route path="/" component={Main}>
     </Route>
   </Router>,
   document.getElementById('app')
);
