import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Javascript from './JavaScript';
import TypeScript from './TypeScript';
import InlineDocumentationJs from './InlineDocumentationJs';
import InlineDocumentationTs from './InlineDocumentationTs';

ReactDOM.render(
  <React.StrictMode>
    {/* <Javascript /> */}
    {/* <TypeScript /> */}
    {/* <InlineDocumentationJs address={address} /> */}
    {/* <InlineDocumentationTs address={address} /> */}
    <App headerText="This is a header" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
