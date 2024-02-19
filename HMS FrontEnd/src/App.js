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
import Owner from './component/Owner.jsx';
import ManagerList from './component/ManagerList.jsx';
import Manager from './component/Manager';
import Addmanager from './component/AddManager.jsx';
import StaffList from './component/StaffList';
import AddStaff from './component/AddStaff.jsx';
import Revenue from './component/Revenue.jsx';
import Payment from './component/Payment.jsx';
import ServiceList from './component/ServiceList.jsx';
import BookingDetails from './component/BookingDetails.jsx';
import GuestDetails from './component/GuestDetails.jsx';
import AddManager from './component/AddManager.jsx';
import BookingList from './component/BookingList.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import AdminHome from './component/Admin/AdminHome.js'


function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer />
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
          <Route exact path='/manager' element={<Manager />}></Route>
          <Route exact path='/owner' element={<Owner />}></Route>
          <Route exact path='/managerList' element={<ManagerList />}></Route>
          <Route exact path='/addmanager' element={<Addmanager />}></Route>
          <Route exact path='/staffList' element={<StaffList />}></Route>
          <Route exact path='/addStaff' element={<AddStaff />}></Route>
          <Route exact path='/revenue' element={<Revenue />}></Route>
          <Route exact path='/payment' element={<Payment />}></Route>
          <Route exact path='/serviceList' element={<ServiceList />}></Route>
          <Route exact path='/guestDetails' element={<GuestDetails />}></Route>
          <Route exact path='/bookingDetails' element={<BookingDetails />}></Route>
          <Route exact path='/addManager' element={<AddManager />}></Route>
          <Route exact path='/bookingList' element={<BookingList />}></Route>
          {/* <Route exact path='/admin' element={<AdminHome/>}></Route> */}
        </Routes>
        {/* <AdminHome/> */}
        <BottamBar />
      </div>
    </Router>
    
    
  );
}

export default App;
