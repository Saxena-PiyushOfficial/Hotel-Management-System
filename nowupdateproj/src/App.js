import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Topbar from './component/Topbar.jsx';
import BottamBar from './component/BottamBar.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Gallery from './component/Gallery.jsx';
import Booknow from  './component/Booknow.jsx';
import Blog from './component/Blog.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Restaurant from './component/Restaurant.jsx';
import { Contact } from './component/Contact.jsx';
import OurRoom from './component/OurRoom.jsx';
import Login from './component/SignIn.jsx';
import SignIn from './component/SignIn.jsx';
import Signup from './component/Signup.jsx';
import Book from './component/Book.jsx';
import Book1 from './component/Book1.jsx';
import Book2 from './component/Book2.jsx';
// import AdminHome from './component/Admin/AdminHome.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Routes>
          <Route exact path='/'  element={<Home />}></Route>
          <Route exact path='/home'  element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/gallery' element={<Gallery />}></Route>
          <Route exact path='/blog' element={<Blog />}></Route>
          <Route exact path='/restaurent' element={<Restaurant />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/room' element={<OurRoom />}></Route>
          <Route exact path='/login' element={<SignIn />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/book' element={<Book />}></Route>
          <Route exact path='/book1' element={<Book1 />}></Route>
          <Route exact path='/book2' element={<Book2 />}></Route>
          {/* <Route exact path='/admin' element={<AdminHome/>}></Route> */}
        </Routes>
        {/* <AdminHome/> */}
        <BottamBar />
      </div>
    </Router>
    
    
  );
}

export default App;
