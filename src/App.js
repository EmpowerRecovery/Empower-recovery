import React, { Suspense, lazy } from 'react';
// import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import './styles/App.scss';
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
