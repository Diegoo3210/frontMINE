import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LeftSideBar from './components/LeftSideBar';
import UpperBar from './components/UpperBar';
import DashBoard from './components/DashBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //row
  <div className='row'>
    <LeftSideBar/>
    <div className='col'>
      <UpperBar/>
      <DashBoard/>
    </div>
    
    
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
