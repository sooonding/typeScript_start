import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Javascript from './JavaScript';
import TypeScript from './TypeScript';
import InlineDocumentationJs from './InlineDocumentationJs';
import InlineDocumentationTs from './InlineDocumentationTs';

const address = {
  street: 'Main st',
  number: 22,
  zip: 'AT15487',
  suite: '#577',
};

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Javascript /> */}
    {/* <TypeScript /> */}
    {/* <InlineDocumentationJs address={address} /> */}
    <InlineDocumentationTs address={address} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
