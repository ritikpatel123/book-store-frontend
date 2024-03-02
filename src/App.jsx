
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

import Notfound from './components/NotFound/NotFound'
import { Toaster } from 'react-hot-toast'
import Home from './components/home/Home'
import BookDetails from './components/books/BookDetails'
import Catalog from './components/books/Catalog'
import AddBooks from './components/books/AddBooks';

function App() {


  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/books" element={<Catalog/>} />
      <Route path="/" element={<Home />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path='/addbooks' element={<AddBooks/>}/>
      <Route path="*" element={<Notfound/>} />
    </Routes>
    <Footer />
    <Toaster />
  </Router>
  )
}

export default App
