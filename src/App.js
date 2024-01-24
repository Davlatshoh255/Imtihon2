import { useEffect, useState } from 'react';
import './App.css';
import Header from './Companents/Header/Header';
import Hard from './Pages/Hard/Hard';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context11/Context11.js';
import Login from './Pages/Login/Login';
import GoodsCW from './Pages/cardWrap/CardWrap2';
import GoodsC from './Pages/Card/Cardjs';
import "./Companents/language/language"



function App() {
  const { token } = useContext(AuthContext)
  const [users,  setUsers] = useState([])


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then(res => res.json())
      .then(free => setUsers(free))
  }, [])

  return (
    <div className='app'>

      {
        token ? (
          <>
            <Header  />



            <Routes>

              {/* N1 Tavarlar */}
              <Route path='/' element={<GoodsCW> 
               

                {
                  users.map(item => (
                    <GoodsC img={item.image} title={item.title} info={item.price} />
                  ))
                }
              </GoodsCW>} />



              <Route path='/Hard' element={< Hard />} />

              <Route path='*' element={<h1 align="center">Erorr</h1>} />
            </Routes></>
        ) : (
          <Login />
        )
      }


    </div>

  );
}



export default App;
