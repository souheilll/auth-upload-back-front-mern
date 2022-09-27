import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Layout from './Components/Layout';
import Auth from './Pages/Auth/Auth';
import Admin from './Pages/Admin/Admin';
import AddItem from './Pages/AddItem/AddItem';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/Sign-In' element={<Auth />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/add_item' element={<AddItem />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>

  );
}
export default App;
