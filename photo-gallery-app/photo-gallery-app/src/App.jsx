import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import UploadPhotoView from './views/UploadPhotoView';
import SinglePhotoView from './views/SinglePhotoView';
import Header from './components/Header/Header';
import EditPhotoView from './views/EditPhotoView';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/upload" element={<UploadPhotoView />} />
        <Route path="/photo/:id" element={<SinglePhotoView />} />
        <Route path="/edit/:id" element={<EditPhotoView />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
