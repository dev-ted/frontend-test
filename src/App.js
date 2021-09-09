import React, { useEffect,useState } from 'react'





import Login from './components/Login';
import './sass/global.scss'
import Home from './components/Home';
import Loading from './utils/Loading';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './redux/userSlice';




function App() {


  
 
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [load, setLoad] = useState(false);

  setTimeout(() => {
setLoad(true)
  }, 1000);
  const users = localStorage.getItem('user')
  console.log("users",users);
 
  useEffect(() => {
    if (users) {
      dispatch(login(JSON.parse(users)))
    } else {
      dispatch(logout())
    }
  }, [dispatch, users])
 



 


  if(!user) return (  <Login />)

  if(!load) return (  <Loading />)


  if(user) return (  <Home />)




 
  
  
}

export default App;
