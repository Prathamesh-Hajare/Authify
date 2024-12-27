import React, { useEffect, useState } from 'react'

const Home = () => {
    const [loggedInUser,setLoggedInUser] = useState('');

    useEffect(()=>{
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    },[])
    const handleLogOut = (e) => {
        
    }
    return (
    <div>
      <h1>{loggedInUser}</h1>
      <h1>Home</h1>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default Home
