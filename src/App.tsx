import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Form from './pages/Form';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
