import { useState } from 'react'
import Home from './Pages/home/Home';
import Profile from './Pages/profile/Profile';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />;
    </>
  )
}

export default App
