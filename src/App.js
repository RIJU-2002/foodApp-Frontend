import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';
import { darkTheme } from './Theme/DarkTheme';
import Home from './components/Home/Home';
import ResturantDetails from './components/Resturant/ResturantDetails';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './components/State/Authentication/Action';
import { findCart } from './components/State/Cart/Action';
import Routers from './Routers/Routers';
import { getResturantsByUserId } from './components/State/Resturant/Action';

function App() {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  },[auth.jwt])

  useEffect(()=>{
    dispatch(getResturantsByUserId(auth.jwt||jwt));
  },[auth.user])

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <Routers/>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
