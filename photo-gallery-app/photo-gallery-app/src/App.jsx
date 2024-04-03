import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import UploadEditView from './views/UploadEditView';
import SinglePhotoView from './views/SinglePhotoView';
import Header from './components/Header/Header';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/upload" element={<UploadEditView />} />
        <Route path="/photo/:id" element={<SinglePhotoView />} />
        <Route path="/edit/:id" element={<UploadEditView />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
