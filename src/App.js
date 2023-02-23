import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbars from './components/Navbars';
import Category from './components/Category';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Home from './components/Home';
import Error from './components/Error';
import Contact from './components/Contact';
import Joblist from './components/Joblist';
import Searchjob from './components/SearchJob';



function App() {
  return (
    <Router>
      <Navbars/>
        <Routes>
          <Route exact path='' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/category' element={< Category />}></Route>
          <Route exact path='/testimonial' element={< Testimonial />}></Route>
          <Route exact path='/error' element={< Error />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/joblist' element={< Joblist />}></Route>
          <Route exact path='/searchjob' element={< Searchjob />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
