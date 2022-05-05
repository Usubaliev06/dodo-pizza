import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import About from './pages/about/About.jsx';
import Main from './pages/main/Main.jsx';
import Admin from './pages/admin/Admin.jsx';
import Footer from './components/footer/Footer.jsx';
import CreateCard from './pages/createCard/CreateCard.jsx';
import { useEffect } from "react";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzaAC } from './redux/actionCreators';

const PrivateRoute = ({ Component }) => {
  const auth = useSelector((state) => state.auth.data?.token)

  if (!auth) {
    return <Navigate to="/admin" />
  } else {
    return <Component />
  }
}


const PublicRoute = ({ Component }) => {
  const auth = useSelector((state) => state.auth.data?.token)

  if (auth) {
    return <Navigate to="/dashboard" />
  } else {
    return <Component />
  }
}



function App() {
  const pending = useSelector((state) => state.pizza.pending)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPizzaAC())
  }, [])

  if (pending) {

    return <h1>LOOADING</h1>
  }

  return (

    <BrowserRouter >
      <Header />
      <hr />
      <Navbar />
      <Routes>

        <Route path='/create_pizza' element={<PrivateRoute Component={CreateCard}  />}/>
        <Route path='/dashboard' element={<PrivateRoute    Component={Dashboard}  />}/>
        <Route path='/admin' element={<PublicRoute    Component={Admin} />}/>
        <Route path='/' element={<Main />} />
        <Route path='/aboute-us' element={<About />} />

      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

  );
}

export default App;
