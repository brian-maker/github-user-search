import React, { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import UserCard from './components/Card'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode)
  }
  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header toggleDarkMode = {toggleDarkMode} darkMode={darkMode}/>
      <Search setUser={setUser}/>
      {user && <UserCard user={user}/>}
    </div>
  )
}

export default App