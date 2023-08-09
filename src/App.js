import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Login } from './Pages/Login';
import { Homepage } from './Pages/Homepage';
import { AuthContext } from './authentication';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { DashBoard } from './Pages/DashBoard/DashBoard';
const App = () => {
  const { user, setUser } = useContext(AuthContext);
  let myRoutes;
  const location = window.location.href;
  // const [isLogin, setIsLogin] = useState(undefined)



  // useEffect(() => {
  //   if (!user) {
  //     setUser({ ...user, ...JSON.parse(localStorage.getItem("auth")) })
  //     // window.location.replace("/")
  //   };
  //   console.log(user,"my stage")
  // }, [user]);
  // if(user?.isLogin){
  //  window.location.replace("/")

  // }

  if (user?.isLogin) {
    myRoutes = [
      { path: "/", element:  user?<Homepage/>:<Login /> ,child:{path: "/dashboard", element: <DashBoard /> }},
      { path: "/dashboard", element: <DashBoard /> },
    ]
  } else {
    myRoutes = [
      { path: "/", element: <Login /> },
    ]
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {myRoutes.map((obj) => {
            return <Route key={x => x + 1} path={obj.path} element={obj.element}/>
              {/* {obj.child}?<Route key={x => x + 1} path={obj.child.path} element={obj.child.element}></Route>:null */}
          })}
          {/* <Route path="/" element={isLogin ? <Homepage /> : <Login isLogin={setIsLogin} />}></Route>
      <Route path="/Homepage" element={<Homepage isLogin={isLogin} />}></Route> */}
        </Routes>


      </BrowserRouter>




    </div>
  );
}

export default App;
