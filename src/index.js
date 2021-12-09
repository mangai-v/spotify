import React from 'react';
import {render} from 'react-dom';
import AuthProvider from './Apis/AuthContext';
import App from './App';
  render(<AuthProvider> <App/></AuthProvider>,document.getElementById("root"))