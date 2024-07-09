import React, { useState } from 'react'
import './Search.css'
import searchIcon from '../assets/icon-search.svg'


function Search({setUser}) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null)

  const handleSearch = async () =>{
    try{
      const res = await fetch(`https://api.github.com/users/${username}`)
      if(!res.ok){
        throw new Error('No results')
      }
      const data = await res.json();
      if (data.created_at) {
      data.created_at = data.created_at.substring(0, 10); 
      }
      if(data.bio == null){
        data.bio = "This profile has no bio"
      }
      if(data.company == null){
        data.company = "Not available"
      }
      if(data.twitter_username == null){
        data.twitter_username = "Not available"
      }
      console.log(data)
      setUser(data)
    }catch(error){
      console.error('Error fetching user:', error);
      setError(error.message); // Set error message
      setUser(null);
      setTimeout(() => setError(''), 3000); // Clear error message after 3 seconds

    }
  }
  return (
    <div className='search'>
      <section>
        <img src={searchIcon} alt="search icon" />
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        placeholder='Search Github Username...'/>
    
      </section>
      {error && <p className="error">{error}</p>} {/* Conditionally render error message */}
      
      <button type='submit'className='search-btn' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search