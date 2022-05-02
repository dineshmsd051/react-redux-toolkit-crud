import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/UserSlice'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditUser from './EditUser';

const store = configureStore({
  reducer: {
    users: userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/update/:id' element={<EditUser />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

