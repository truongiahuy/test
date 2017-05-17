import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Hello from './components/hello';
import './index.css';

ReactDOM.render(
  <Hello name="test" level={10} />,
  document.getElementById('root') as HTMLElement
);
