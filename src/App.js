import './App.css';
import Index from './Pages/Index';
import ContactPage from './Pages/ContactPage';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/beta' element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}
