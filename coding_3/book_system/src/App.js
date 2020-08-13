import React from 'react';
import './App.css';
import Navbar from './common/Navbar';
import Home from './components/Home';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './common/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <Navbar />
      <Routes />
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
