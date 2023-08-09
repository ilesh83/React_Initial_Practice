import React from 'react'
import { useNavigate } from 'react-router-dom';
export const SideNavComponent = () => {
  const navigate=useNavigate();
  const onDashboardClick=()=>{
    console.log("on dashboard click");
    navigate('/ ')
  }


  return (
    <div>
      {/* { data &&  Object.values(data).map((obj,index) =>{
        return <li key={obj.title}>{obj.title}</li> 
      })}
       */}

       <li onClick={()=>onDashboardClick()}>Dashboard</li>
       <li>Profile</li>
    </div>
  )
}
