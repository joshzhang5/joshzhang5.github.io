import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './Components/Routes';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
