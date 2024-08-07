import { Outlet } from 'react-router-dom'
import './App.css'
// components
import NavbarComponent from './components/NavbarComponent'

// axios - Default BaseURL Settings..
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

function App() {

  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  )
}

export default App
