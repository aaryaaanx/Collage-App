import logo from './logo.svg';
import './App.css';

import HomePage from './component/HomePage';
import GalleryPage from './component/GalleryPage';
import ContactPage from './component/ContactPage';
import AboutPage from './component/AboutPage';

function App() {
  return (
    <div >
      <HomePage/>
      <br/>
      <hr/>
      <GalleryPage/>
      <br/>
      <hr/>
      <AboutPage/>
      <br/>
      <hr/>
      <ContactPage/>
    </div>
  );
}

export default App;
