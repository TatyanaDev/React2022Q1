import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import NotFound from './Pages/NotFound';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
