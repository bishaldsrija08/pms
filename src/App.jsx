import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import SingleBlog from './pages/single/SingleBlog'
import Edit from './pages/Edit/Edit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/products/:id' element={<SingleBlog />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App